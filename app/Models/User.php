<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Message;
use Illuminate\Support\Str;


//spatie media
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_img_url',
        'slug',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Override the default route key name
    public function getRouteKeyName()
    {
        return 'slug';
    }

    // Generate a unique slug for the user
    public function generateUniqueSlug($name)
    {
        $slug = Str::slug($name);

        // Check if the slug is unique
        $count = User::where('slug', $slug)->count();

        // If not unique, append 5 random numbers
        if ($count > 0) {
            $slug .= '-' . rand(10000, 99999);
        }

        return $slug;
    }

    public static function create(array $attributes = [])
    {
        $user = new static($attributes);

        // Generate a unique slug
        $user->slug = $user->generateUniqueSlug($user->name);

        $user->save();

        return $user;
    }


    public function sentMessages()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }

    public function receivedMessages()
    {
        return $this->hasMany(Message::class, 'receiver_id');
    }
}
