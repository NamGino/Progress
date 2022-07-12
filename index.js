const Loader = document.querySelector('.content');
const app = {
    loadPage:function(){
        window.onload = function(){
            setTimeout(()=>{
                Loader.style.opacity = '0';
            },2000);
            setTimeout(()=>{
                Loader.style.display = 'none';
            },2200);
        }
    },
    start: function(){
        this.loadPage();
    }
}

app.start();