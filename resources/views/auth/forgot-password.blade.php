<x-guest-layout>
    <div>
        <h1>Restablecer Contraseña</h1>
        <p>¿Olvidaste tu contraseña? No te preocupes, introduce tu correo y te enviaremos un enlace para restablecerla.</p>
    </div>

    <!-- Mensaje de Sesión -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <!-- Dirección de Email -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <div class="flex items-center justify-between mt-4">
            <a class="underline text-sm text-gray-100 hover:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" href="{{ route('login') }}">
                {{ __('Volver al inicio de sesión') }}
            </a>

            <x-primary-button class="btn">
                {{ __('Enviar enlace') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
