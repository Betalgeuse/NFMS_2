# https://xthemadgenius.medium.com/how-to-build-a-fast-trading-bot-for-ethereum-and-other-cryptos-to-master-high-frequency-crypto-6502dbfdb8aa
# 24.04.10

import ccxt
from web3 import Web3

# Connect to an Ethereum node
w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))

# Check connection
print(w3.is_connected())


# Initialize exchange connections
binance = ccxt.binance()
coinbase = ccxt.coinbase()

# Fetch ETH/USD price from both exchanges
binance_eth_price = binance.fetch_ticker('ETH/USD')['close']
coinbase_eth_price = coinbase.fetch_ticker('ETH/USD')['close']

# Example strategy: buy on Coinbase and sell on Binance if profitable
if coinbase_eth_price < binance_eth_price:
    # Execute trade (This is a placeholder. Implement actual trading logic)
    print("Buying ETH on Coinbase and selling on Binance.")

    import requests

def send_telegram_message(message, bot_token, chat_id):
    send_text = f'https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={message}'
    response = requests.get(send_text)
    return response.json()

# Example usage
bot_token = '7084443773:AAFi2Ti7Tjybf4qYP5XPPFq46wR9OAvdK4I'
chat_id = '1474718706'
send_telegram_message("Trade executed successfully.", bot_token, chat_id)