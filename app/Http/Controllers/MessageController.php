<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class MessageController extends Controller
{
    public function index() {
        return Inertia::render("Message/Index", [
            'messages' => Auth::user()->receivedMessages()->latest()->get()
        ]);
    }

    public function show(Message $message) {
        return Inertia::render("Message/Show", compact('message'));
    }

    public function sendMessage(Request $request) {
        $validatedData = $request->validate([
            'content' => 'required',
            'receiver_id' => 'required'
        ]);

        Message::create([
            'sender_id' => Auth::id(),
            'receiver_id' => $validatedData['receiver_id'],
            'content' => $validatedData['content'],
        ]);
    }

    public function markAsRead(Request $request, Message $message){
        $validatedData = $request->validate(['isRead' => 'required']);

        if(!$message->isRead) {
            $message->isRead = true;
            $message->save();
        }
    }
}
