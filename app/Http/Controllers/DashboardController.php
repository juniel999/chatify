<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;
use Carbon\Carbon;

use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index() {
        $totalSentMessagesThisMonth = Message::where('sender_id', Auth::id())
            ->sentThisMonth()
            ->count();
        $totalReceivedMessagesThisMonth = Message::where('receiver_id', Auth::id())
            ->sentThisMonth()
            ->count();


        return Inertia::render('Dashboard',[
            'total_sent' => Auth::user()->sentMessages()->count(),
            'total_received' => Auth::user()->receivedMessages()->count(),
            'total_sent_messages' => $totalSentMessagesThisMonth,
            'total_received_messages' => $totalReceivedMessagesThisMonth,
        ]);
    }
}
