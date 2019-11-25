$(function () {

    //コンテンツを囲む要素をidで指定
    var container = document.querySelector('#gallery');

    //すべての画像を読み込み終わった後に関数を実行
   
        var msnry = new Masonry(container, {
            itemSelector: '.item', //コンテンツのclass名
            isFitWidth: true, //コンテナの親要素のサイズに基づいて、コンテンツのカラムを自動調節します。
            columnWidth: 310, //カラムの幅を設定
        });
        console.log("a");
    
        
    
});