<template>
    <div class="title">
        <h1> Different type of CryptoMoney </h1>

    </div>
    
    <div class="container">
    <div id="products" class="row list-group">
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                            Bitcoin (BTC)</h4>
                        <img class="group list-group-image" src="/assets/Bitcoin.png" alt="" />
                    <p class="group inner list-group-item-text">
                        Bitcoin, a contraction of the words bit (binary unit of measurement) and coin (coin), is a cryptographic currency backed by a peer-to-peer payment system that exists only in digital form.</p>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Ethereum (ETH)</h4>
                        <img class="group list-group-image" src="assets/Ethereum.png" alt="" />
                    <p class="group inner list-group-item-text">
                        Ethereum is an open source distributed blockchain software platform.But unlike the Bitcoin blockchain, it can also be deployed in a consortium blockchain framework.</p>
                </div>
                
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                <img class="group list-group-image" src="assets/Tether_USD.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Tether USD (USDT)</h4>
                    <p class="group inner list-group-item-text">
                        Tether (abbreviated USDT) is a crypto-currency, stablecoin, issued by the company Tether Limited. Historically, the company claimed that each coin was backed by a U.S. dollar, 
                        but as of March 14, 2019 , it has changed its backing to include loans to affiliated businesses.</p>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                <img class="group list-group-image" src="assets/USD_Coin.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        USD Coin (USDC)</h4>
                    <p class="group inner list-group-item-text">
                        The USD coin (USDC) is a cryptocurrency that appeared on the market in 2018. Unlike the majority of other virtual currencies, it is defined by its low volatility and stable price, hence its high awareness and growing popularity.</p>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                <img class="group list-group-image" src="assets/Binance_Coin.png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Binance Coin (BNB)</h4>
                    <p class="group inner list-group-item-text">
                        Binance Coin(BNB) is the token of the 3rd most used blockchain in the world (BEP-20, Binance Smart Chain[BSC]).BNB is also the native token of the exchange platform Binance, the world leader in terms of crypto transactions.</p>
                </div>
            </div>
        </div>
        <div class="item  col-xs-4 col-lg-4" :class="itemClass">
            <div class="thumbnail">
                <img class="group list-group-image" src="assets/Cardano(ADA).png" alt="" />
                <div class="caption">
                    <h4 class="group inner list-group-item-heading">
                        Cardano(ADA)</h4>
                    <p class="group inner list-group-item-text">
                        Cardano is an open source blockchain, as well as a platform for executing smart contracts. Cardano's internal cryptocurrency is called Ada.</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<style scoped>
.glyphicon { margin-right:5px; }
.thumbnail
{
    margin-bottom: 20px;
    padding: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

.item.list-group-item
{
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
    background: #0ee895;
}

.item.list-group-item .list-group-image
{
    margin-right: 10px;
}
.item.list-group-item .thumbnail
{
    margin-bottom: 0px;
}
.item.list-group-item .caption
{
    padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
    background: #eeeeee;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item img
{
    float: center;
}
.item.list-group-item:after
{
   
}
.list-group-item-text
{
    margin: 0 0 11px;
}
.list-group {
    flex-direction: row;
}
.title{
    
width: 1117px;
height: 100px;
margin: 100px;
margin-left: -7px;
background-color:grey;
margin-top: 100px;
border-radius: 20px;

}
</style>
<script>
export default {
  data() {
    return {
        itemClass: "list-group-item"
    };
  },
};
</script>
