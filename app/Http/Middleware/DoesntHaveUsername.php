<?php

namespace App\Http\Middleware;

use Closure;
use Session;

use CAT\User\Logic;

class DoesntHaveUsername
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $userLogic = new Logic;
        
        if ($userLogic->get()) {
            return redirect()->route('lobby');
        }
        
        return $next($request);
    }
}
