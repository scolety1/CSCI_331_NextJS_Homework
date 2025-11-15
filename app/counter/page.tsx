import Counter from "../../components/Counter";

export default function CounterPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Counter Demo</h1>
      <p>Two counters with different step sizes (+1 and +2), both reset at 10.</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Counter incrementBy={1} buttonColor="#3b82f6" />
        <Counter incrementBy={2} buttonColor="#10b981" />
      </div>
    </main>
  );
}

