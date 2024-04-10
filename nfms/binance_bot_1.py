# https://ko.linux-console.net/?p=25684
#24.04.10 파일 생성: polling 방식으로 
# timesleep으로 인한 latency 문제인지 아예 create_order 방식에 msg dictionary가 없는 것인지 불분명함.
# 따라서 websocket 방식이 적합하다고 판단
# 의의: binance api 통한 거래 성공



import ccxt
import time
import datetime
with open("/workspaces/NFMS_2/nfms/binance.key") as f: 
    lines = f.readlines() 
    access = lines[0].strip() 
    secret = lines[1].strip()

exchange = ccxt.binance({
    'apiKey': access,
    'secret': secret,
    'enableRateLimit': True,
})

# define the trading parameters
symbol = 'BTC/USDT'
amount = 0.0001
stop_loss = 0.95
take_profit = 1.05
min_price_diff = 0.0000002
#24.04.10 PEPE 시도 하다 실패

# get the initial balance of the account
initial_balance = exchange.fetch_balance()['total']['USDT']

# define the trading function
def trade():
   # get the current price of the symbol
   ticker = exchange.fetch_ticker(symbol)
   current_price = ticker['last']
    
   # check if there is sufficient balance to make a trade
   if initial_balance < amount * current_price:
      print('Insufficient balance.')
      return
    
   # calculate the stop loss and take profit prices
   stop_loss_price = current_price * stop_loss
   take_profit_price = current_price * take_profit
    
   # place the buy order
   buy_order = exchange.create_order(symbol, 'limit', 'buy', amount, current_price)
   
   # check if the buy order was successful
   if buy_order['status'] == 'filled':
      print('Buy order filled at', current_price)
   else:
      print('Buy order failed:', buy_order['info']['msg'])
      return
    
   # define a loop to monitor the price
   while True:
      # get the current price of the symbol
      ticker = exchange.fetch_ticker(symbol)
      current_price = ticker['last']
        
      # calculate the price difference
      price_diff = current_price - buy_order['price']
        
      # check if the price difference is greater than the minimum price difference
      if abs(price_diff) >= min_price_diff:
         # check if the stop loss or take profit price has been reached
         if price_diff < 0 and current_price <= stop_loss_price:
            # place the sell order
            sell_order = exchange.create_order(symbol, 'limit', 'sell', amount, current_price)
                
            # check if the sell order was successful
            if sell_order['status'] == 'filled':
               print('Sell order filled at', current_price)
            else:
               print('Sell order failed:', sell_order['info']['msg'])
            break
         elif price_diff > 0 and current_price >= take_profit_price:
            # place the sell order
            sell_order = exchange.create_order(symbol, 'limit', 'sell', amount, current_price)
                
            # check if the sell order was successful
            if sell_order['status'] == 'filled':
               print('Sell order filled at', current_price)
            else:
               print('Sell order failed:', sell_order['info']['msg'])
            break
        
      # wait for 5 seconds before checking the price again
      time.sleep(60)
      print(buy_order)
      print(sell_order)

# call the trade function
#trade()

#ccxt.base.errors.InvalidOrder: binance amount of PEPE/USDT must be greater than minimum amount precision of 0
#최소주문보다 적게 주문했다는 뜻
# ccxt.base.errors.BadRequest: binance {"code":-1013,"msg":"Filter failure: NOTIONAL"}
#가격*수량이 최소보다 적다는 뜻

