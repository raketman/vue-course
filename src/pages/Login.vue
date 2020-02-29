<template>
    <div>
        <h2>Авторизация</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Логин</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Логин обязателен</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Пароль обязателен</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="isAuth">Войти</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data () {
            return {
                username: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            ...mapGetters('user', ['isAuth'])
        },
        created () {
            this.logout();

            this.$store.subscribe( (mutation) => {
                if (mutation.type !== 'user/loginSuccess') {
                    return;
                }

                this.$router.push('/');
            })
        },
        methods: {
            ...mapActions('user', ['login', 'logout']),
            handleSubmit () {
                this.submitted = true;
                const { username, password } = this;
                if (username && password) {
                    this.login({ username, password })
                }
            }
        }
    };
</script>
