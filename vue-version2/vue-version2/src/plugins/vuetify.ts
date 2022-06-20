import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify, {VBtn, VIcon, VSnackbar} from '@vue/cli-service';
import VuetifyToast from 'vuetify-toast-snackbar-ng';

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon
    }
});
Vue.use(VuetifyToast, {
    x: 'center', // default
    y: 'top', // default
    color: 'info', // default
    icon: 'Info',
    timeout: 3000, // default
    dismissable: true, // default
    autoHeight: false, // default
    multiLine: false, // default
    vertical: false, // default
    shorts: {
        success: {
            color: '#00B709',
            icon: 'mdi-check-circle',
            showClose: true,
            closeText: '',
            closeIcon: 'mdi-close'
        },
        warning: {
            color: '#FF9600',
            icon: 'mdi-alert',
            showClose: true,
            closeText: '',
            closeIcon: 'mdi-close'
        },
        error: {
            color: '#F00',
            icon: 'mdi-close-circle',
            showClose: true,
            closeText: '',
            closeIcon: 'mdi-close'
        }
    },
    property: '$toast' // default
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0C78E5',
                secondary: '#AA8A50',
                red: '#DE4747',
                blue: '#395FC6',
                green: '#51A01C',
                yellow: '#F28C2F',
                bluegray: '#778CA2',
                darkgray: '#4A4D51',
                maingray: '#1A1C28',
            },
            dark: {
                primary: '#0C78E5',
                secondary: '#AA8A50',
                red: '#DE4747',
                blue: '#395FC6',
                green: '#51A01C',
                yellow: '#F28C2F',
                bluegray: '#778CA2',
                darkgray: '#4A4D51',
                maingray: '#1A1C28',
            },
        },
    }
});
