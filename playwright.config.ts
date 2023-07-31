import {PlaywrightTestConfig, chromium} from '@playwright/test'


const config: PlaywrightTestConfig ={

    timeout:60000,
    retries:0,
    use:{
        headless:false,
        viewport:{
            width:1536,
            height:715
        },
        actionTimeout:15000,
        ignoreHTTPSErrors:true,
        video:'off',
        screenshot:'on',
    },
    projects: [
        {
            name:'Chromium',
            use:{browserName: 'chromium'},
        },

        {
            name:'Firefox',
            use:{browserName: 'firefox'},
        },

        {
            name:'Webkit',
            use:{browserName: 'webkit'},
        },
    ],

}

export default config;