import Card from "../components/admin/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Users" value="1,234" />
      <Card title="Sales" value="$12,345" />
      <Card title="Performance" value="95%" />
    </div>
  );
}
