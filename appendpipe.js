function appendPipeline(arr) {
    const cameraEl = document.querySelector("[gps-projected-camera]");
    const scene = document.querySelector("a-scene");
    arr.forEach((item, index) => {
        const geodata = item["geometry"]["coordinates"];
        const startCoords = geodata[0], endCoords = geodata[1];
        const startPos = cameraEl.components["gps-projected-camera"].latLonToWorld(startCoords[1],startCoords[0]);
        const endPos = cameraEl.components["gps-projected-camera"].latLonToWorld(endCoords[1],endCoords[0]);
        const distance = Math.sqrt(Math.pow(endPos[0]-startPos[0], 2)+Math.pow(endPos[1]-startPos[1], 2));
        const middle = [(startCoords[0]+endCoords[0])/2, (startCoords[1]+endCoords[1])/2];
        const entity = document.createElement("a-entity");
        const cylinder = document.createElement("a-cylinder");
        cylinder.setAttribute("color", "yellow");
        cylinder.setAttribute("radius", 1);
        // cylinder.setAttribute("position", {x: 0, y: -5, z:0});
        //这里将管线从垂直转向为水平角度
        cylinder.setAttribute("rotation", {x: 0, y: 0, z: -90});
        cylinder.setAttribute("index", index);
        cylinder.setAttribute("height", distance);
        cylinder.addEventListener("click", listenClick);

        const text = document.createElement("a-text");
        const textScale = 100;
        text.setAttribute("look-at", "[gps-projected-camera]");
        text.setAttribute("scale", {
            x: textScale,
            y: textScale,
            z: textScale
        });
        text.setAttribute("value", index);
        text.setAttribute("align", "center");
        text.setAttribute("color", "red");
        // text.setAttribute("position", {x: 0, y: -5, z:0});

        entity.setAttribute("gps-projected-entity-place", {
            longitude: middle[0],
            latitude: middle[1],
        });
        // entity.object3D.lookAt(new THREE.Vector3(startPos[0],0,startPos[1]));
        

        //计算水平角度的旋转角
        const a = 180-Math.atan2(endPos[1]-startPos[1], endPos[0]-startPos[0])/Math.PI*180;
        entity.setAttribute("rotation", {x: 0, y: a, z: 0});
        entity.setAttribute("id", "tunnel_" + index);
        entity.setAttribute("class", "pipeline");
        entity.appendChild(cylinder);
        entity.appendChild(text);
        scene.appendChild(entity);
    });
}

//p1 p2计算p1 ,p2 两者之间的圆柱体的摆放




AFRAME.registerComponent("tunnel", {
    init: function () {
        const firstObj = document.getElementById("box1");
        const secondObj = document.getElementById("box2");
        const firstPos = new THREE.Vector3();
        const secondPos = new THREE.Vector3();
        const el = this.el;
        const cylinder = this.el.querySelector("a-cylinder");
        //每0.5毫秒执行以下当下操作，首先获取的是Obj3D的位置信息
        const idx = setInterval(() => {
            firstPos.copy(firstObj.object3D.position)
            secondPos.copy(secondObj.object3D.position)

            const distance = firstPos.distanceTo(secondPos)
            if (!distance) return;
            console.log("anchors ready")
            clearInterval(idx);

            const middle = firstPos.multiplyScalar(-1).add(secondPos).multiplyScalar(1 / 2)

            cylinder.setAttribute("height", distance)
            el.object3D.lookAt(firstPos)
            el.object3D.position.copy(middle).add(firstObj.object3D.position)
        }, 500)
    }
});

AFRAME.registerComponent("tunnel_1", {
    init: function () {
        const firstObj = document.getElementById("box3");
        const secondObj = document.getElementById("box4");
        const firstPos = new THREE.Vector3();
        const secondPos = new THREE.Vector3();
        const el = this.el;
        const cylinder = this.el.querySelector("a-cylinder")
        //每0.5毫秒执行以下当下操作，首先获取的是Obj3D的位置信息
        const idx = setInterval(() => {
            firstPos.copy(firstObj.object3D.position)
            secondPos.copy(secondObj.object3D.position)

            const distance = firstPos.distanceTo(secondPos)
            if (!distance) return;
            console.log("anchors ready")
            clearInterval(idx);

            const middle = firstPos.multiplyScalar(-1).add(secondPos).multiplyScalar(1 / 2)

            cylinder.setAttribute("height", distance)
            el.object3D.lookAt(firstPos)
            el.object3D.position.copy(middle).add(firstObj.object3D.position)
        }, 500)
    }
});
//从全家走向自强超市的位置
AFRAME.registerComponent("tunnel_2", {
    init: function () {
        const firstObj = document.getElementById("box8");
        const secondObj = document.getElementById("box9");
        const firstPos = new THREE.Vector3();
        const secondPos = new THREE.Vector3();
        const el = this.el;
        const cylinder = this.el.querySelector("a-cylinder")
        //每0.5毫秒执行以下当下操作，首先获取的是Obj3D的位置信息
        const idx = setInterval(() => {
            firstPos.copy(firstObj.object3D.position)
            secondPos.copy(secondObj.object3D.position)

            const distance = firstPos.distanceTo(secondPos)
            if (!distance) return;
            console.log("anchors ready")
            clearInterval(idx);

            const middle = firstPos.multiplyScalar(-1).add(secondPos).multiplyScalar(1 / 2)

            cylinder.setAttribute("height", distance)
            el.object3D.lookAt(firstPos)
            el.object3D.position.copy(middle).add(firstObj.object3D.position)
        }, 500)
    }
});

//怡膳堂左侧道路

AFRAME.registerComponent("tunnel_3", {
    init: function () {
        const firstObj = document.getElementById("box10");
        const secondObj = document.getElementById("box11");
        const firstPos = new THREE.Vector3();
        const secondPos = new THREE.Vector3();
        const el = this.el;
        const cylinder = this.el.querySelector("a-cylinder")
        //每0.5毫秒执行以下当下操作，首先获取的是Obj3D的位置信息
        const idx = setInterval(() => {
            firstPos.copy(firstObj.object3D.position)
            secondPos.copy(secondObj.object3D.position)

            const distance = firstPos.distanceTo(secondPos)
            if (!distance) return;
            console.log("anchors ready")
            clearInterval(idx);

            const middle = firstPos.multiplyScalar(-1).add(secondPos).multiplyScalar(1 / 2)

            cylinder.setAttribute("height", distance)
            el.object3D.lookAt(firstPos)
            el.object3D.position.copy(middle).add(firstObj.object3D.position)
        }, 500)
    }
});



AFRAME.registerComponent("tunnel_4", {
    init: function () {
        const firstObj = document.getElementById("box12");
        const secondObj = document.getElementById("box13");
        const firstPos = new THREE.Vector3();
        const secondPos = new THREE.Vector3();
        const el = this.el;
        const cylinder = this.el.querySelector("a-cylinder")
        //每0.5毫秒执行以下当下操作，首先获取的是Obj3D的位置信息
        const idx = setInterval(() => {
            firstPos.copy(firstObj.object3D.position)
            secondPos.copy(secondObj.object3D.position)

            const distance = firstPos.distanceTo(secondPos)
            if (!distance) return;
            console.log("anchors ready")
            clearInterval(idx);

            const middle = firstPos.multiplyScalar(-1).add(secondPos).multiplyScalar(1 / 2)

            cylinder.setAttribute("height", distance)
            el.object3D.lookAt(firstPos)
            el.object3D.position.copy(middle).add(firstObj.object3D.position)
        }, 500)
    }
});
