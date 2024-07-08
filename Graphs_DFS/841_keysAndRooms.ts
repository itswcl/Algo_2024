/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // a empty set to represent the room we visited
    const visited = new Set();

    const dfs = (room) => {
        // if we had visited the room we dont do thing
        if (visited.has(room)) return;

        // we add the current we visiting
        visited.add(room)

        // now we go thru the key in this room
        for (let keysOfRoom of rooms[room]) {

            // we add each key to room we able to visit
            dfs(keysOfRoom)
        }
    }
    dfs(0);
    // we checked the room we visited and what we have
    return rooms.length === visited.size
};

var canVisitAllRooms2 = function(rooms) {
    const visited = new Set();
    const queue = [0];

    while (queue.length) {
        const curRoom = queue.pop();
        visited.add(curRoom);

        const curKeys = rooms[curRoom]
        for (let key of curKeys) {
            const hasKey = visited.has(key);
            if (!hasKey) queue.push(key);
        }
    }

    return rooms.length === visited.size
};