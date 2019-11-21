<template>
    <div>
        <div class="new-word">
            <input type="text" :model="formInfo.kana" class="form-control" placeholder="Kana">
            <input type="text" class="form-control" placeholder="Kanji">
            <input type="text" class="form-control" placeholder="Fonetica">
            <input type="text" class="form-control" placeholder="Traduccion">
            <select class="custom-select" id="inputGroupSelect01">
                <option value="Verbo" selected> Verbo </option>
                <option value="Adjetivo"> Adjetivo </option>
                <option value="Nombre"> Nombre </option>
                <option value="Adverbio"> Adverbio </option>
                <option value="Articulo"> Articulo </option>
            </select>
            <input type="text" class="form-control" placeholder="Subcategoría">
            <div class="btn btn-info">Enviar</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'i-add-word',
    data() {
        return {
            formInfo: {
                kana: ''
            }
        }
    },
    methods: {
        sendWord(){
            axios.post('http://127.0.0.1:9000/idiomas', data);
        }
    }
}
</script>

<style scoped lang="scss">
    .btn{
        cursor: pointer;
    }
    .new-word {
        width: 100%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        height: 10vh;
        position: fixed;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(7, 1fr);
        padding: 0 30px;
        bottom: 0;
        background-color: #dedede;
        left: 0;

        input {
            width: 100%;
            border-radius: 0;

        }
    }

</style>