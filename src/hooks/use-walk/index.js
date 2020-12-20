import { useState } from 'react';
import { SPRITE_SIZE, DIRECTIONS, Interact } from '../../config/const'
import { Collision1 } from '../../components/map/world/collision'


export default function useWalk(maxSteps) {
    const [position, setPos] = useState({x: 2*SPRITE_SIZE, y: 3*SPRITE_SIZE});
    const [dir, setDir] = useState(0);
    const [step,setStep] = useState(0);
    const [interact, setInteract] = useState(false);
    const directions = DIRECTIONS;

    const stepSize = SPRITE_SIZE;

    const modifier ={
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }
    

    function walk(dir) {
        setDir((prev) => {
            if(directions[dir] === prev ) move(dir)
            
            return directions[dir];
            
        });
        setStep((prev) => prev < maxSteps-1 ? prev+1 : 0);
    }

    function testCollision({x, y}, dir) {
        const tempx = (x + modifier[dir].x)/SPRITE_SIZE
        const tempy = (y + modifier[dir].y)/SPRITE_SIZE
        const x2 = tempx + modifier[dir].x/SPRITE_SIZE
        const y2 = tempy + modifier[dir].y/SPRITE_SIZE
        
        if (Collision1[y2][x2] >= 20 || Collision1[tempy][tempx]){
            setInteract(true);
            console.log('Ca marche');
        }
        else{
            setInteract(false);
            console.log('False');
        }

        if (Collision1[tempy][tempx] === 0)
        {
                 
            return ({ 
                x: x + modifier[dir].x,
                y: y + modifier[dir].y,
            })
        }
        else
        {
            return ({
                x,
                y,
            })
        }      
    }

    function move(dir){
        setPos(prev => testCollision(prev, dir));
        
    }


    return {
        walk,
        dir,
        step,
        position,
        interact,
    }
}