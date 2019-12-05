<template>
    <div>
        <h1 style="text-align: center; padding: 20px;"> {{ this.getLangActive }} </h1>
        <div class="word-list">
            <div class="word-header">
                <div v-show="shows.form1" class="form1">Forma 1</div>
                <div v-show="shows.form2" class="form2">Forma 2</div>
                <div v-show="shows.form3" class="form3">Forma 3</div>
                <div v-show="shows.fonetica" class="fonetica">Fonética</div>
                <div v-show="shows.traduccion" class="traduccion">Traduccion</div>
                <div v-show="shows.relacion" class="relacion">Relación</div>
                <div v-show="shows.tipo" class="tipo">Tipo</div>
                <div v-show="shows.ejemplo" class="ejemplo">Ejemplo</div>
                <div v-show="shows.subcategoria" class="subcategoria">Subcategoría</div>
                <div v-show="shows.idioma" class="idioma">Idioma</div>
            </div>
            <div class="the-word" :class="{extra: isExtra(word, i)}" v-for="(word, i) in getLangWords" :key="i">
                <input v-show="shows.form1" class="form1" type="text" :value="word.form1">
                <input v-show="shows.form2" class="form2" type="text" :value="word.form2">
                <input v-show="shows.form3" class="form2" type="text" :value="word.form3">
                <input v-show="shows.fonetica" class="fonetica" type="text" :value="word.fonetica">
                <input v-show="shows.traduccion" class="traduccion" type="text" :value="word.traduccion">
                <input v-show="shows.relacion" class="relacion" type="text" :value="word.relacion">
                <input v-show="shows.tipo" class="tipo" type="text" :value="word.tipo">
                <input v-show="shows.ejemplo" class="ejemplo" type="text" :value="word.ejemplo">
                <input v-show="shows.subcategoria" class="subcategoria" type="text" :value="word.subcategoria">
                <input v-show="shows.idioma" class="idioma" type="text" :value="word.idioma">
            </div>
        </div>
        <div class="new-word">
            <input type="text" v-model="formInfo.form1" class="form-control" placeholder="Form1">
            <input type="text" v-model="formInfo.form2" class="form-control" placeholder="Form2">
            <input type="text" v-model="formInfo.form3" class="form-control" placeholder="Form3">
            <input type="text" v-model="formInfo.fonetica" class="form-control" placeholder="Fonetica">
            <input type="number" v-model="formInfo.tier" class="form-control" placeholder="Tier">
            <input type="text" v-model="formInfo.traduccion" class="form-control" placeholder="Traduccion">
            <select v-model="formInfo.tipo" class="custom-select">
                <option value="Verbo" selected> Verbo </option>
                <option value="Adjetivo"> Adjetivo </option>
                <option value="Nombre"> Nombre </option>
                <option value="Adverbio"> Adverbio </option>
                <option value="Articulo"> Articulo </option>
            </select>
            <input v-model="formInfo.subcategoria" type="text" class="form-control" placeholder="Subcategoría">
            <div class="btn btn-info" @click="sendWord()" >Enviar</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'i-add-word',
    data() {
        return {
            formInfo: {
                form1: '',
                form2: '',
                form3: '',
                fonetica: '',
                traduccion: '',
                relacion: '',
                tipo: 'Verbo',
                ejemplo: '',
                subcategoria: '',
                idioma: this.getLangActive
            } 
        }
    },
    methods: {
        ...mapActions(['loadWords', 'loadLangs']),
        sendWord(){
            var _ = this;
            this.formInfo.idioma = this.getLangActive;
            axios.put('http://127.0.0.1:9000/idiomas', this.formInfo)
            .then(function() {
                _.loadWords();
                _.formInfo = {
                    form1: '',
                    form2: '',
                    form3: '',
                    fonetica: '',
                    traduccion: '',
                    relacion: '',
                    tipo: 'Verbo',
                    tier: '1',
                    ejemplo: '',
                    subcategoria: '',
                    idioma: _.getLangActive
                } 
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        isExtra(word, i) {
            return i > 0 && word.subcategoria !== this.getLangWords[i - 1].subcategoria; //Dividir subcategorias
        }
    },
    computed: {
        ...mapGetters(['getLangActive', 'getLangWords'])
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
        grid-template-columns: repeat(9, 1fr);
        padding: 0 30px;
        bottom: 0;
        background-color: #dedede;
        left: 0;

        input {
            width: 100%;
            border-radius: 0;

        }
    }
    .word-header {
        display: flex;
        width: 100%;
        div {
            padding: 10px;
            font-size: 18px;
            border: 1px solid rgb(224, 224, 224);
            background: none;
            flex-grow: 3;
        }
    }
    .the-word{
        display: flex;
        width: 100%;
        input {
            padding: 10px;
            font-size: 18px;
            border: 1px solid rgb(224, 224, 224);
            background: none;
        }
    }
    .the-word:nth-child(odd){
        background: #F3F3F3;
    }
    .extra{
        margin-top: 20px;
    }

</style>