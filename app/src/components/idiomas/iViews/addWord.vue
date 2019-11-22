<template>
    <div>
        <div class="word-list">
            <div class="the-word">
                <input type="text">
            </div>
        </div>
        <div class="new-word">
            <input type="text" :model="formInfo.kana" class="form-control" placeholder="Kana">
            <input type="text" :model="formInfo.kanji" class="form-control" placeholder="Kanji">
            <input type="text" :model="formInfo.fonetica" class="form-control" placeholder="Fonetica">
            <input type="text" :model="formInfo.traduccion" class="form-control" placeholder="Traduccion">
            <select :model="formInfo.tipo" class="custom-select" id="inputGroupSelect01">
                <option value="Verbo" selected> Verbo </option>
                <option value="Adjetivo"> Adjetivo </option>
                <option value="Nombre"> Nombre </option>
                <option value="Adverbio"> Adverbio </option>
                <option value="Articulo"> Articulo </option>
            </select>
            <input :model="formInfo.subcategoria" type="text" class="form-control" placeholder="Subcategoría">
            <div class="btn btn-info" @click="sendWord()" >Enviar</div>
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
                kana: '',
                kanji: '',
                fonetica: '',
                traduccion: '',
                tipo: '',
                subcategoria: ''
            } 
        }
    },
    methods: {
        sendWord(){
            axios.post('http://127.0.0.1:9000/idiomas', this.formInfo);
        },
        ajaxWords(){
            axios.get('http://127.0.0.1:9000/idiomas', this.formInfo);
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