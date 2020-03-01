<template>
    <div>
        <h2>Авторизация</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Логин</label>
                <input type="text"
                       v-validate="{ required: true, regex: /^[a-z]{4,}$/ }"
                       v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <span v-if="errors.has('username')"  class="invalid-feedback" style="display: block">
                    Логин должен содержать не менее 4 английских букв
                </span>
            </div>
            <div class="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password"
                       v-validate="{ required: true, regex: /^.{1,}$/ }"
                       v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <span v-if="errors.has('password')"  class="invalid-feedback" style="display: block">
                    Пароль обязателен
                </span>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="!isFormValid">Войти</button>
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
            ...mapGetters('user', ['isAuth']),
            // Проверяем, что каждое поле формы валидно
            isFormValid () {
                return Object.keys(this.fields).every(field => this.fields[field].valid);
            },
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
