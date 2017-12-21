window.addEventListener('load',function(){
    let can = document.querySelector('canvas');
    let shape = document.querySelectorAll('.shape>li');
    let color = document.querySelectorAll('.color>li');
    let input = document.querySelectorAll('input');
    let zhe = document.querySelector('.zhe');
    let opacity = document.querySelector('.opacity');
    let canvas = new Palette(can);
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
            }else{
                canvas[type]();
            }
            if(type == 'eraser'){
                zhe.style.display = 'block';
                opacity.style.display = 'block';
                let maxH = opacity.offsetHeight -zhe.offsetHeight;
                let maxW = opacity.offsetWidth - zhe.offsetWidth;
                opacity.onmousemove = function(e){
                    let zw = zhe.offsetWidth;
                    let zh = zhe.offsetHeight;
                    let ex = e.offsetX - zw/2;
                    let ey = e.offsetY - zh/2;
                    if(ex >= maxW){
                        ex = maxW;
                    }
                    if(ey >= maxH){
                        ey = maxH;
                    }
                    if(ex <= 0){
                        ex = 0;
                    }
                    if(ey <= 0){
                        ey =0;
                    }
                    zhe.style.top = ey+10+ 'px';
                    zhe.style.left = ex+51+ 'px';
                    canvas.ctx.clearRect(ex,ey,zw,zh)
                }

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