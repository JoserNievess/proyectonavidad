<x-guest-layout>
    <div class="container">
        <div class="background">
            <h1>Iniciar Sesión</h1>
            <p>Introduce tus credenciales para continuar:</p>

            <!-- Session Status -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <!-- Email Address -->
                <div>
                    <x-input-label for="email" :value="__('Email')" class="text-white" />
                    <x-text-input 
                        id="email" 
                        class="block mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        type="email" 
                        name="email" 
                        :value="old('email')" 
                        required 
                        autofocus 
                        autocomplete="username" 
                    />
                    <x-input-error :messages="$errors->get('email')" class="mt-2 text-pink-300" />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <x-input-label for="password" :value="__('Contraseña')" class="text-white" />
                    <x-text-input 
                        id="password" 
                        class="block mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
                        type="password"
                        name="password"
                        required 
                        autocomplete="current-password" 
                    />
                    <x-input-error :messages="$errors->get('password')" class="mt-2 text-pink-300" />
                </div>

                <!-- Remember Me -->
                <div class="block mt-4">
                    <label for="remember_me" class="inline-flex items-center">
                        <input 
                            id="remember_me" 
                            type="checkbox" 
                            class="rounded border-gray-300 text-pink-500 shadow-sm focus:ring-pink-500 focus:ring-offset-0" 
                            name="remember"
                        >
                        <span class="ms-2 text-sm text-white">{{ __('Recuerdame') }}</span>
                    </label>
                </div>

                <div class="flex items-center justify-between mt-4">
                    @if (Route::has('password.request'))
                        <a 
                            class="underline text-sm text-white hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            href="{{ route('password.request') }}"
                        >
                            {{ __('Olvidaste tu Contraseña?') }}
                        </a>
                    @endif

                    <x-primary-button 
                        class="ms-3 btn"
                    >
                        {{ __('Log in') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-guest-layout>
