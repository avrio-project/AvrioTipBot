module.exports = { 

wallethostname: process.env.HOST || "127.0.0.1",
walletport : process.env.PORT || 8979,
bot_token : process.env.BT || "",
mongodburl: "mongodb://localhost:27017/avrioTipBot",

owner_id : process.env.OID || "",
coin_name : "AVRIO",
block_maturity_requirement : 40,
coin_total_units : 4,
coin_display_units : 4,
server_wallet_address : "",
withdraw_tx_fees : "0.03",
withdraw_min_amount: "0.001",
wait_time_for_withdraw_confirm : 30000,
custom_message_length_limit: 100,
log_1 : true,
log_2 : true,
log_3 : true
};
