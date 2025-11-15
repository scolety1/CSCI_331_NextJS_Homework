'use client'

export default function GitHubInfo() {
  const boxStyle = {
    margin: '16px',
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '700px',
    lineHeight: 1.5,
  }

  const linkStyle = {
    color: '#2563eb',
    textDecoration: 'underline',
  }

  return (
    <div style={boxStyle}>
      <h2>Project / GitHub Details</h2>
      <p>
        This page is part of my CSCI 331 Next.js homework. All of the code for
        the counters, the FakeStore search page, and this info component lives
        in my{' '}
        <a
          href="https://github.com/scolety1/CSCI_331_NextJS_Homework"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub repo for this assignment
        </a>
        .
      </p>
      <p>
        For my final project, I&apos;m planning to build a{' '}
        <strong>Weather + Air Quality dashboard</strong>. The idea is to pull
        data from APIs (like OpenWeatherMap / AirVisual), show current
        conditions and short-term forecasts, and make everything easy to skim
        with simple charts or icons. The main things I want to show off are:
      </p>
      <ul style={{ marginLeft: '1.5rem' }}>
        <li>Working with external APIs</li>
        <li>Basic state management for live-ish data</li>
        <li>A clean, responsive UI that doesn&apos;t feel cluttered</li>
      </ul>
      <p>
        Basically, I want it to feel like a simple, at-a-glance dashboard you
        could actually use before going outside.
      </p>
    </div>
  )
}

