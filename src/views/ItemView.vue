<template>
    <div class="container-fluid m-0  p-0 bg-zxc" v-if="item">
        <nav class="navbar navbar-expand navbar-light bg-dark">
            <div class="container-fluid">
                <div id="mySidebar" class="sidebar button_hide_zxc">
                    <p style="color:gray; padding-left: 18px; font-size: 23px;">См. также</p>
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                    <router-link v-for="link in item.sidebar" :key="link.to" :to="link.to" style="text-decoration: none;">
                        <p style="color: #818181; font-size: 18px;" class="text_info dopinfo" v-html="link.html"></p>
                    </router-link>
                </div>
                <button class="openbtn button_hide_zxc" onclick="openNav()">⛰ </button>
                <router-link to="/" class="navbar-brand text-light">Factorio Wiki</router-link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="https://vk.com/i_liberov">Link</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2 bg-dark " type="search" placeholder="" aria-label="Search">
                        <button class="btn btn btn-black text-light btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container-fluid" style="margin-top: 20px; max-width: 1920px;">
            <div class="row" style="margin-right: 0; margin-left: 0;">
                <div class="col-2 bar__sm">
                    <div class="container-fluid p-0 ">
                        <h3 class="text_info">См. также</h3>
                        <div>
                            <div class="pb-1" v-for="link in item.sidebar" :key="link.to">
                                <router-link :to="link.to" style="text-decoration: none;">
                                    <p class="text_info dopinfo" v-html="link.html.replace(/<img[^>]*>/g, '')"></p>
                                </router-link>
                            </div>
                            <div class="info__block">
                                <div><router-link to="/" style="text-decoration: none;"><p class="text_info txtinfo">Главная страница</p></router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8 grinder">
                    <div style="color:white; margin-right: 0;">
                        <center>
                            <h1 class="head__text">{{ item.title }} <img v-if="item.icon" class="img-fluid" :src="item.icon"></h1>
                        </center>
                        <p class="head__text mobile__text__head" style="padding-top:20px" v-html="item.description"></p>
                        <div class="row grinder mx-0 " v-if="item.extraInfo">
                            <div style="padding-left:0px ;" class="col-12 grinder">
                                <h3 class="head__text head__info">Дополнительно</h3>
                                <p class="history head__text" v-html="item.extraInfo"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col p-0 grinder" style="background:#242324 ; ">
                    <div class="container p-0  w-auto">
                        <div style="color:white ;">
                            <div class="block">
                                <h3 style="text-align: center;" class="text_info-2">{{ item.title }} <img v-if="item.icon" class="img-fluid" :src="item.icon"></h3> 
                                <img v-if="item.entityImg" class="img-fluid" style="padding-bottom:10px;" :src="item.entityImg">
                                
                                <template v-if="item.costs && item.costs.length > 0">
                                    <p class="text_info">Затраты</p>
                                    <template v-for="(cost, index) in item.costs" :key="index">
                                        <div class="factorio-icon" style="background-color:#999 ;">
                                            <router-link v-if="cost.to" :to="cost.to" :title="cost.text || item.title">
                                                <img :src="cost.img">
                                            </router-link>
                                            <img v-else :src="cost.img">
                                            <div class="factorio-icon-text" v-if="cost.text">{{ cost.text }}</div>
                                        </div>
                                        <span v-if="index < item.costs.length - 2"> + </span>
                                        <span v-if="index === item.costs.length - 2"> → </span>
                                    </template>
                                </template>
                            </div>
                            <div class="block_2" v-if="item.totalRaw && item.totalRaw.length > 0">
                                <p class="text_info">Всего сырья</p>
                                <template v-for="(raw, index) in item.totalRaw" :key="index">
                                    <div class="factorio-icon" style="background-color: #999">
                                        <router-link v-if="raw.to" :to="raw.to" :title="raw.text || item.title">
                                            <img :src="raw.img">
                                        </router-link>
                                        <img v-else :src="raw.img">
                                        <div class="factorio-icon-text" v-if="raw.text">{{ raw.text }}</div>
                                    </div>
                                    <span v-if="index < item.totalRaw.length - 1"> + </span>
                                </template>
                            </div>
                            
                            <div class="item__info" v-for="stat in item.stats" :key="stat.key">
                                <table cellspacing="5" width="100%">
                                    <tbody><tr>
                                        <td>{{ stat.key }} </td>
                                        <td class="pos" v-html="stat.valueHtml"></td>
                                    </tr>
                                </tbody></table>
                            </div>
                            
                            <div class="item__info" v-if="item.technologies && item.technologies.length > 0">
                                <table cellspacing="5" width="100%">
                                    <tbody><tr>
                                        <td>Необходимые технологии </td>
                                    </tr>
                                </tbody></table>
                                <div class="pos-researches">
                                    <div class="factorio-icon" style="background-color: #999" v-for="(tech, index) in item.technologies" :key="index">
                                        <router-link v-if="tech.to" :to="tech.to">
                                            <img :src="tech.img" style="width:32px">
                                        </router-link>
                                        <img v-else :src="tech.img" style="width:32px">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="item__info" v-if="item.producedIn && item.producedIn.length > 0">
                                <table cellspacing="5" width="100%">
                                    <tbody><tr>
                                        <td>Производится В </td>
                                    </tr>
                                </tbody></table>
                                <div class="pos-researches">
                                    <div class="factorio-icon" style="background-color: #999" v-for="(prod, index) in item.producedIn" :key="index">
                                        <router-link v-if="prod.to" :to="prod.to">
                                            <img :src="prod.img" style="width:32px">
                                        </router-link>
                                        <img v-else :src="prod.img" style="width:32px">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br>
    </div>
    <div v-else class="container-fluid bg-zxc m-0 p-0 text-center text-light d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div>
            <h2>Предмет не найден</h2>
            <router-link to="/" class="btn btn-outline-light mt-3 mx-3">На главную</router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'

const route = useRoute()
const item = computed(() => {
    return data[route.path] || null
})
</script>
<style scoped>
</style>