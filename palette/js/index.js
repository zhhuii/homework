window.addEventListener('load',function(){
    let can = document.querySelector('canvas');
    let shape = document.querySelectorAll('.shape>li');
    let color = document.querySelectorAll('.color>li');
    let input = document.querySelectorAll('input');
    let zhe = document.querySelector('.zhe');
    let opacity = document.querySelector('.opacity');
    let canvas = new Palette(can,zhe,opacity);
    shape.forEach(e=>{
        let type = e.id;
        e.onclick = function(){
            shape.forEach(obj=>{
                obj.classList.remove('hot');
            })
            e.classList.add('hot');
            if(type == 'poly' || type == 'polyj'){
                let ang = prompt('请输入边数或度数')
                canvas[type](ang);
                canvas.zhe.style.display = 'none';
                canvas.opacity.style.display = 'none';
            }else{
                canvas[type]();
                canvas.zhe.style.display = 'none';
                canvas.opacity.style.display = 'none';
            }
            if(type == 'eraser'){
                canvas[type]();
            }
        }
    })
    color.forEach(e=>{
            e.onclick = function() {
                if (e.className == 'stroke') {
                    canvas.style = 'stroke';
                } else if (e.className == 'fill') {
                    canvas.style = 'fill';
                }
            }
    })
    input.forEach(e=>{
        e.onchange = function(){
            if(e.className == 'color1'){
                let co = e.value;
                canvas.strokeStyle = co;
            }else if(e.className == 'color2'){
                let co = e.value;
                canvas.fillStyle = co;
                console.log(canvas.fillStyle)
            }
        }
    })

})