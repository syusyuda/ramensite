$(function () {

    //�R���e���c���͂ޗv�f��id�Ŏw��
    var container = document.querySelector('#gallery');

    //���ׂẲ摜��ǂݍ��ݏI�������Ɋ֐������s
   
        var msnry = new Masonry(container, {
            itemSelector: '.item', //�R���e���c��class��
            isFitWidth: true, //�R���e�i�̐e�v�f�̃T�C�Y�Ɋ�Â��āA�R���e���c�̃J�������������߂��܂��B
            columnWidth: 310, //�J�����̕���ݒ�
        });
        console.log("a");
    
        
    
});