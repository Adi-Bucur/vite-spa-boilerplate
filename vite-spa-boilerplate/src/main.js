import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="app">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">NeuroLink Pro</h1>
        <p class="hero-subtitle">The future of brain-computer interfaces. Advanced AI-powered brain wave analysis for unprecedented insights into your mind.</p>
        <div class="hero-cta">
          <button class="btn-primary">Learn More</button>
          <button class="btn-secondary">Watch Demo</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="device-showcase">
          <div class="brain-waves"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="section-header">
        <h2>Breakthrough Technology</h2>
        <p>Advanced neural interface powered by cutting-edge AI</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>Real-time Analysis</h3>
          <p>Process brain waves instantly with our advanced AI algorithms for immediate insights.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Ultra-low Latency</h3>
          <p>Experience seamless brain-computer interaction with response times under 10ms.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Privacy First</h3>
          <p>Your neural data stays secure with end-to-end encryption and local processing.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Deep Insights</h3>
          <p>Understand your cognitive patterns, focus levels, and mental states like never before.</p>
        </div>
      </div>
    </section>

    <!-- Product Lineup -->
    <section class="products">
      <div class="section-header">
        <h2>Choose Your NeuroLink</h2>
        <p>Designed for every need, from research to daily use</p>
      </div>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-image">
            <div class="device device-pro"></div>
          </div>
          <h3>NeuroLink Pro</h3>
          <p class="product-price">$2,999</p>
          <p class="product-description">Professional-grade neural interface with 256-channel EEG and advanced AI processing.</p>
          <button class="btn-product">Learn More</button>
        </div>
        <div class="product-card featured">
          <div class="product-image">
            <div class="device device-ultra"></div>
          </div>
          <h3>NeuroLink Ultra</h3>
          <p class="product-price">$4,999</p>
          <p class="product-description">Ultimate brain-computer interface with real-time thought translation and motor control.</p>
          <button class="btn-product">Learn More</button>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="device device-home"></div>
          </div>
          <h3>NeuroLink Home</h3>
          <p class="product-price">$1,299</p>
          <p class="product-description">Consumer-friendly device for meditation, focus training, and cognitive enhancement.</p>
          <button class="btn-product">Learn More</button>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story">
      <div class="story-content">
        <div class="story-text">
          <h2>Empowering Human Potential</h2>
          <p>Sarah, a neuroscientist, uses NeuroLink Pro to unlock new discoveries about consciousness. With real-time brain wave analysis, she's advancing our understanding of the human mind.</p>
          <blockquote>"NeuroLink has transformed how we study the brain. The precision and speed of analysis is unprecedented."</blockquote>
        </div>
        <div class="story-visual">
          <div class="research-scene"></div>
        </div>
      </div>
    </section>

    <!-- Specifications -->
    <section class="specs">
      <div class="section-header">
        <h2>Technical Excellence</h2>
        <p>Built with precision and powered by innovation</p>
      </div>
      <div class="specs-grid">
        <div class="spec-group">
          <h3>Neural Processing</h3>
          <ul>
            <li>256-channel EEG sensors</li>
            <li>10,000 Hz sampling rate</li>
            <li>16-bit resolution</li>
            <li>AI-powered noise reduction</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>Connectivity</h3>
          <ul>
            <li>USB-C with 40Gbps transfer</li>
            <li>Wireless 6E compatibility</li>
            <li>Bluetooth 5.3 support</li>
            <li>Real-time streaming</li>
          </ul>
        </div>
        <div class="spec-group">
          <h3>AI Capabilities</h3>
          <ul>
            <li>On-device LLM processing</li>
            <li>Pattern recognition</li>
            <li>Predictive analysis</li>
            <li>Adaptive learning</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
`
