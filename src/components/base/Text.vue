<template>
  <div>
      <input type="text" name="name" id="" :value="value" @input="valueChanged">
  </div>
</template>

<script>
    export default {
        name:'y-text',
        data:{
            name:name,
            value:this.value
        },
        props:['name','value'],
        methods:{
            valueChanged(event){
                var newVal=event.target.value;
                this.$emit('input',{name:this.name,value:newVal});
            }
        }
    }
</script>