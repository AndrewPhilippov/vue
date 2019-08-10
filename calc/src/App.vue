<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<style lang="scss">
    $background: rgba(255,255,255, .2);
    #app{
        /** GENERAL **/

        /* font */
        font-size: 62.5%; // Grab 10 px out of 16. Now 1em === 10px;
        font-family: 'Poiret One', sans-serif;
        font-weight: 400;
        color: #fff;

        h1{
            font-size: 10em;
        }
        h2{
            font-size: 8em;
        }
        h3{
            font-size: 5em;
            padding-bottom: 1em;
        }
        background-color: darkblue;
        display: grid;

        /* common */

        span.fake-checkbox {
            height: 26px;
            width: 60px;
            border: 3px solid #fff;
            border-radius: 20px;
            display: block;
            position: relative;
            padding: 2px;

            &:after {
                position: absolute;
                left: 3px;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                height: 15px;
                width: 15px;
                border: 3px solid #fff;
                border-radius: 50%;
                transition: all .3s;
            }
        }

        input:checked + span.fake-checkbox:after {
            left: calc(100% - 15px - 3px);
            transition: all .3s;
        }
        /* styling sections*/
        section.calc-part{
            background-color: $background;
            padding: 4em;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 5px;
            position: relative;
        /* styling numbers of sections */
            &::before{
                position: absolute;
                height: 80px;
                width: 80px;
                top: -30px;
                left: -30px;
                color: #fff;
                font-size: 5em;
                background-color: darkblue;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                font-family: Roboto, sans-serif;
                font-weight: bold;
                line-height: 80px;
                border: 2px solid #fff;
            }
        }
    }
</style>
