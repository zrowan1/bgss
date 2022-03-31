<template>
    <div id="widgetlist"></div>
    <button @click="increment">+</button>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                const iDiv = document.createElement('div');
                var idstring = "widget";
                console.log(idstring);
                iDiv.id = idstring;
                iDiv.style.height = "200px";
                iDiv.style.width = "100%";
                iDiv.style.backgroundColor = "black";
                iDiv.style.margin = "10px";
                document.getElementById('widgetlist').appendChild(iDiv);


                const iH1 = document.createElement('h1');
                iH1.textContent = 'This is a widget!'
                iH1.style.color = "white";
                iDiv.appendChild(iH1);
                //this.count++
            }
        }
    }
</script>
