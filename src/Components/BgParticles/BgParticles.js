import React, {useLayoutEffect} from 'react';

import './BgParticles.css'

const BgParticles = () => {

    useLayoutEffect(()=>{
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');

        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;

        const particlesArray=[];

        const mouse = {
            x: undefined,
            y: undefined,
        }

        class Particle {
            constructor(){
                this.x = mouse.x;
                this.y = mouse.y;
                this.size = Math.random() * 20 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 5 - 5;
                this.colorHue = 165;
                this.colorAlpha = 1.0;
            }
            update = () =>{
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.colorHue<200) this.colorHue++;
                if(this.colorAlpha>0) this.colorAlpha -= 0.01;
                if(this.size > 0.2) this.size -= 0.2;
            }
            draw = () =>{
                ctx.fillStyle = `hsla(${this.colorHue},100%,50%,${this.colorAlpha})`;
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
                ctx.fill();
            }
        }

        window.addEventListener('resize', ()=>{
            canvas.width=window.innerWidth;
            canvas.height=window.innerHeight;

        })
    
        canvas.addEventListener('mousemove',(event)=>{
            mouse.x = event.x;
            mouse.y = event.y;
            for(let i = 0; i < 7; i++){
                particlesArray.push(new Particle());

            }
        })

        const handleParticles = () => {
            for(let i = 0 ; i < particlesArray.length; i++){
                particlesArray[i].update();
                particlesArray[i].draw();
                if(particlesArray[i].size <= 0.3){
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0,0,canvas.width,canvas.height);

            handleParticles();
            requestAnimationFrame(animate);
        }
        animate();
    });

    
    return(
        <canvas className="background-particles-background" id="particle-canvas" style={
            {
                position:'fixed', 
                top: 0,
                right: 0,
                bottom: 0, 
                left: 0,
                zIndex: -1}} 
        >
            Background Particles
        </canvas>
    );
}

export default BgParticles;