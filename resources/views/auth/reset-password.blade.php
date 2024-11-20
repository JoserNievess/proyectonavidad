<x-guest-layout>
    <div>
        <h1>Restablecer Contraseña</h1>
        <p>Introduce tu nueva contraseña para restablecer el acceso a tu cuenta.</p>
    </div>

    <form method="POST" action="{{ route('password.store') }}">
        @csrf

        <!-- Token para Restablecimiento de Contraseña -->
        <input type="hidden" name="token" value="{{ $request->route('token') }}">

        <!-- Dirección de Email -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Correo Electrónico')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Nueva Contraseña -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Nueva Contraseña')" />
            <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirmar Contraseña -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirmar Nueva Contraseña')" />
            <x-text-input id="password_confirmation" class="block mt-1 w-full" type="password" name="password_confirmation" required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <!-- Botón de Restablecimiento -->
        <div class="flex items-center justify-end mt-4">
            <x-primary-button class="btn">
                {{ __('Restablecer Contraseña') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
