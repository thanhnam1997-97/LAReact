<?php
 
namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;

 
use Illuminate\View\View;

class AuthController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }
    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản vs mật khẩu không đúng'], Response::HTTP_UNAUTHORIZED);
        }
        $accessTokenCookie = Cookie::make('access_token', $token, auth()->factory()->getTTL() * 1);
        return $this->respondWithToken($token)->withCookie($accessTokenCookie);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 1
        ]);
    }
}