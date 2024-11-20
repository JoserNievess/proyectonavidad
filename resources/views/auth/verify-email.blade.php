<x-guest-layout>
    <div>
        <h1>Verificación de Correo Electrónico</h1>
        <p>
            ¡Gracias por registrarte! Antes de comenzar, por favor verifica tu dirección de correo electrónico haciendo clic en el enlace que te acabamos de enviar. 
            Si no recibiste el correo, con gusto te enviaremos otro.
        </p>
    </div>

    @if (session('status') == 'verification-link-sent')
        <div class="alert alert-success mt-4">
            {{ __('Se ha enviado un nuevo enlace de verificación a la dirección de correo que proporcionaste durante el registro.') }}
        </div>
    @endif

    <div class="actions mt-6 flex justify-between items-center">
        <!-- Enviar enlace de verificación -->
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf
            <x-primary-button class="btn">
                {{ __('Reenviar Correo de Verificación') }}
            </x-primary-button>
        </form>

        <!-- Cerrar sesión -->
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="btn-secondary">
                {{ __('Cerrar Sesión') }}
            </button>
        </form>
    </div>
</x-guest-layout>
