import React from 'react';

// Fake data
const stats = [
  {
    title: 'Total Users',
    value: '2,543',
    change: '+12%',
    trend: 'up',
    icon: '👥',
    color: '#1976d2',
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '+8%',
    trend: 'up',
    icon: '📦',
    color: '#388e3c',
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+15%',
    trend: 'up',
    icon: '💰',
    color: '#f57c00',
  },
  {
    title: 'Ebooks',
    value: '567',
    change: '-3%',
    trend: 'down',
    icon: '📚',
    color: '#9c27b0',
  },
];

const recentUsers = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
  { name: 'Mike Johnson', email: 'mike@example.com', status: 'Pending' },
  { name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Active' },
  { name: 'Tom Brown', email: 'tom@example.com', status: 'Inactive' },
];

const topEbooks = [
  { title: 'JavaScript Complete Guide', sales: 234, rating: 4.8 },
  { title: 'React Development', sales: 189, rating: 4.9 },
  { title: 'Node.js Mastery', sales: 156, rating: 4.7 },
  { title: 'Python for Beginners', sales: 143, rating: 4.6 },
  { title: 'Vue.js Fundamentals', sales: 128, rating: 4.5 },
];

// Simple chart component with fake data
const SimpleChart = () => {
  const chartData = [65, 59, 80, 81, 56, 55, 40, 45, 50, 60, 70, 75];
  const maxValue = Math.max(...chartData);
  
  return (
    <div style={{ height: '200px', display: 'flex', alignItems: 'end', justifyContent: 'space-between', padding: '16px' }}>
      {chartData.map((value, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: '#1976d2',
              borderRadius: '4px 4px 0 0',
              width: '24px',
              height: `${(value / maxValue) * 160}px`,
              transition: 'all 0.3s ease',
            }}
          ></div>
          <span style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

const StatCard = ({ title, value, change, trend, icon, color }) => (
  <div className="stat-card">
    <div className="stat-header">
      <p className="stat-title">{title}</p>
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
    </div>
    <p className="stat-value">{value}</p>
    <div className="stat-change">
      <span className={`stat-change-value ${trend}`}>
        {change}
      </span>
      <span className="stat-change-text">vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your ebook platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="content-grid">
        {/* Recent Users */}
        <div className="content-card">
          <h3 className="content-card-title">Recent Users</h3>
          {recentUsers.map((user, index) => (
            <div key={index} className="user-item">
              <div className="user-info">
                <div className="user-avatar">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="user-details">
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
              <span className={`user-status ${user.status.toLowerCase()}`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>

        {/* Top Ebooks */}
        <div className="content-card">
          <h3 className="content-card-title">Top Selling Ebooks</h3>
          {topEbooks.map((ebook, index) => (
            <div key={index} className="ebook-item">
              <div className="ebook-info">
                <div className="ebook-icon">📚</div>
                <div className="ebook-details">
                  <h4>{ebook.title}</h4>
                  <p>{ebook.sales} sales</p>
                </div>
              </div>
              <div className="ebook-rating">
                <span>⭐</span>
                <span>{ebook.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <h3 className="chart-title">Sales Overview</h3>
        <div className="chart-placeholder">
          <SimpleChart />
        </div>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>Monthly sales data for the past 12 months</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="content-card">
        <h3 className="content-card-title">Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-button">
            <div className="action-icon">👥</div>
            <p className="action-text">Manage Users</p>
          </button>
          <button className="action-button">
            <div className="action-icon">📚</div>
            <p className="action-text">Add Ebook</p>
          </button>
          <button className="action-button">
            <div className="action-icon">📊</div>
            <p className="action-text">View Reports</p>
          </button>
          <button className="action-button">
            <div className="action-icon">📥</div>
            <p className="action-text">Export Data</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
