<x-guest-layout>
    <div class="container mx-auto py-8 px-4">
        <div class="background bg-gray-800 p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-white mb-6 text-center">Iniciar Sesión</h1>
            <p class="text-gray-300 mb-8 text-center">Introduce tus credenciales para continuar:</p>

            <!-- Session Status -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <!-- Email Address -->
                <div class="mb-4">
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
                <div class="mb-4">
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

                <div class="flex items-center justify-between mt-8">
                    @if (Route::has('password.request'))
                        <a 
                            class="underline text-sm text-pink-300 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            href="{{ route('password.request') }}"
                        >
                            {{ __('Olvidaste tu Contraseña?') }}
                        </a>
                    @endif

                    <x-primary-button 
                        class="ms-3 btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-2"
                    >
                        {{ __('Log in') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-guest-layout>
