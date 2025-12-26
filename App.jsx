// NEET Study Planner Website (React)
// Single-file scaffold with routing and core features

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ------------------ TO DO PAGE ------------------
function TodoPage() {
  const [chapter, setChapter] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!chapter || !task) return;
    setTodos([...todos, { chapter, task, revision: 0, practice: 0, theory: 0 }]);
    setTask("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">NEET To‑Do List (Class 11 & 12)</h1>

      <Card className="p-4">
        <input
          className="border p-2 mr-2"
          placeholder="Chapter (e.g. Thermodynamics)"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTodo}>Add</Button>
      </Card>

      {todos.map((t, i) => (
        <Card key={i} className="p-4">
          <CardContent>
            <h2 className="font-semibold">{t.chapter}</h2>
            <p>{t.task}</p>
            <p className="text-sm">Revision / Practice / Theory tracking</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ------------------ ANALYTICS PAGE ------------------
function AnalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Performance Analytics</h1>
      <p>Graphs for daily, weekly, and monthly performance.</p>
      <p>(Integrate Recharts for bar & line graphs)</p>
    </div>
  );
}

// ------------------ POMODORO TIMER ------------------
function PomodoroPage() {
  const [time, setTime] = useState(25 * 60);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Pomodoro Timer</h1>
      <p className="text-xl">{Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</p>
      <Button className="mt-4">Start</Button>
    </div>
  );
}

// ------------------ CHAT ROOM ------------------
function ChatRoomPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Online Chat Room (4 Users)</h1>
      <p>Use Firebase / WebSocket for real‑time chat.</p>
    </div>
  );
}

// ------------------ MAIN APP ------------------
export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">To‑Do</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/pomodoro">Pomodoro</Link>
        <Link to="/chat">Chat Room</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/chat" element={<ChatRoomPage />} />
      </Routes>
    </Router>
  );
}
