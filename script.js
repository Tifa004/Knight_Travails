const { linkedlist } = require('./LinkedList.js');

function knightMoves(from,to){
        if (!from || !to) {
            throw new Error('Travailing requires a from and to locations to calculate the shortest path');
        }

        const queue = new linkedlist(); 
        queue.enqueue(from.toString());

        const traverse = (visited={}) => {
            const current = queue.dequeue().split(',').map(Number);
            visited[from.toString()] = null;
            const check=(coord,visited)=>{
                if((-1<coord[0] && coord[0]<8) && (-1<coord[1] && coord[1]<8)){
                    if(!visited.hasOwnProperty(coord.toString())){
                        queue.enqueue(coord.toString());
                        visited[coord.toString()]=current.toString();
                    }
                } 
            }
            const backTrack=(visited,end)=>{
                const path=[];
                let current=end.toString();
                while(current){
                    path.push(current.split(',').map(Number));
                    current=visited[current]
                }
                return path.reverse();
            }
            
            const moves = [
                [1, 2], [-1, 2], [1, -2], [-1, -2],
                [2, 1], [2, -1], [-2, 1], [-2, -1]
            ];

            for (let [dx, dy] of moves) {
                const nx = current[0] + dx;
                const ny = current[1] + dy;
                check([nx, ny], visited);
                if(visited.hasOwnProperty(to.toString())) break;
            }
        
            if(visited.hasOwnProperty(to.toString())){
                return backTrack(visited,to);
            } 
            
            return traverse(visited);
        };

        return traverse();

}

console.log(knightMoves([0,0],[3,3]))
console.log(knightMoves([0,0],[7,7]))