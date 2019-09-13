﻿window.app = new Vue({
    el: '#app',
    data: {
        register_address: null,
        view: 'announce',
        running: false,
        total_progress: {
            max: 1,
            cur: 0
        },
        current_progress: {
            max: 1,
            cur: 0,
            fname: null
        },
        announce: null,
        realm: [],
        selected_realm: null
    },
    watch: {
        deep: true
    },
    computed: {
        total_progress_rate: function () {
            return this.total_progress.cur / this.total_progress.max;
        },
        current_progress_rate: function () {
            return this.current_progress.cur / this.current_progress.max;
        }
    },
    methods: {
        setTotalProgress: function (current, total) {
            this.total_progress.max = total;
            this.total_progress.cur = current;
        },
        setCurrentProgress: function (fname, current, total) {
            this.current_progress.fname = fname;
            this.current_progress.max = total;
            this.current_progress.cur = current;
        },
        autoSelectRealm: function () {
            if (!this.selected_realm && this.realm.length) {
                this.selected_realm = this.realm[0].name;
            }
        },
        launch: function () {
            if (this.view === 'update' || this.running) return;
            Launch(this.selected_realm);
        }
    }
});