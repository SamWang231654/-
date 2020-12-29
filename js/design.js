// 風格切換
let spanbtn = document.querySelectorAll('.stylelist li');

let flexjpg = document.getElementsByClassName('stylebox_right');

for(let x = 0; x < spanbtn.length; x++){
    spanbtn[x].addEventListener('click',function(){
        for (let y = 0; y < flexjpg.length; y++){
            
        flexjpg[y].style.display = 'none';
        spanbtn[y].style.border = 'none';
        }
        flexjpg[x].style.display = 'flex';
        spanbtn[x].style.border = '1px solid #aca8a4';
    });
}
