function insertApps() {
 const appsHTML = `
 <html>
 <head>
 <style>
   body .apps {
     font-family: Arial, sans-serif;
     margin: 0;
     background: #ffffff;
      color: #000000;
     
   }

   :root {
   --gold-gradient: linear-gradient(
     135deg,
     #00096b 0%,
     #344cd4 25%,
     #657bca 50%,
     #37a8bf 75%,
     #a8ff90 100%
   );
 }

   section {
   padding-top: 40px;
     text-align: center;
   }

   .middle {
     background:rgb(219, 219, 219)
   }

   h2 {
     font-size: 2.2rem;
     margin-bottom: 10px;
   }

   h3 {
     font-size: 1.4rem;
     margin-bottom: 20px;
     color: #444;
   }

   .product-wrapper {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     gap: 30px;
     max-width: 1200px;
     margin: auto;
   }

   .product-image {
     max-width: 300px;
     flex: 1;
   }

   .product-image img {
     width: 100%;
     border-radius: 16px;
   }

   .product-content {
     flex: 2;
     max-width: 600px;
     text-align: left;
   }

   .product-content p {
     font-size: 1.1rem;
     line-height: 1.6;
     margin-bottom: 1rem;
   }

   .pricing-placeholder {
     font-weight: bold;
     margin: 1rem 0;
   }

   .cta-buttons {
     margin: 1rem 0;
   }

   .cta-buttons a {
     display: inline-block;
     margin: 0.5rem;
     padding: 15px 30px;
     border-radius: 10px;
     font-weight: bold;
     text-decoration: none;
   }

   .cta-buttons .free {
     background: #77ff00;
     color: #000;
   }

   .cta-buttons .pro {
     background: #00ccff;
     color: #000;
   }

   table {
     width: 100%;
     max-width: 800px;
     margin: auto;
     margin-bottom: 20px;
 
     font-size: 1rem;
     border: 2px solid #000;
   }

   td {

     padding: 12px;
     border: 1px solid black;
     text-align: center;
   }

   th {
     background: var(--gold-gradient);
   background-size: 200% 200%;
   animation: shimmer 10s linear infinite;
  
   padding: 12px;
   
   }

   thead {
    
     color: #fff;
   }

   tr:nth-child(even) {
     background:rgb(248, 237, 255);
   }
   tr:nth-child(odd) {
     background: #a9f6ff;
   }

   @media (max-width: 768px) {
     .product-wrapper {
       flex-direction: column;
     }

     .product-content {
       text-align: center;
     }
   }

   @media (max-width:480px) {

    .feature-table {
      width: 100%;
    }

    table {
        width:100%;
    }

    .middle {
    background: white;
    }
}
 </style>
 </head>
 <body class="apps">

<section>
 <h2>Quick Add Pro</h2>
 <h3>Launch Products at Lightning Speed</h3>
 <div class="product-wrapper">
   <div class="product-image">
     <img id="add" src="images/addpro.png" alt="Quick Add Pro">
   </div>
   <div class="product-content">
     <p>Quick Add Pro lets you create WooCommerce products without touching the bloated product editor. Upload images, set prices—all from a single, blazing-fast form.</p>
     <p>Stop wasting hours clicking through attributes. Quick Variation Pro auto-generates variation combos, sets pricing and stock, and assigns images in one interface.</p>
     <div class="pricing-placeholder">$49.99 / year $99.99 / Lifetime </div>
     <div class="cta-buttons">
       <a href="downloads/Quick-Add.zip" class="free">Download Free Version</a>
       <a href="#" class="pro">Purchase PRO Version</a>
     </div>
   </div>
 </div>

 <section class="feature-table">
   <table>
     <thead>
       <tr>
         <th>Features</th>
         <th>Quick Add FREE</th>
         <th>Quick Add PRO</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>Create Simple, External, Grouped, Variable Products</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Upload Product Images Inline</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Schedule Sales & Discounts</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Add Attributes with Variation Toggles</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>AJAX-Powered Saving</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Lightweight, No Setup Required</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Unlimited Usage on Any Site</td>
         <td>✅</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Add Custom Attributes</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Variation Image Support</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Default Values for Variable Products</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Variation Descriptions</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Attribute Visibility Control</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Quick Variation Generator</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
       <tr>
         <td>Full Variation Field Editor</td>
         <td>❌</td>
         <td>✅</td>
       </tr>
     </tbody>
   </table>
 </section>
</section>


<section class="middle">
 <h2>Quick Edit Pro</h2>
 <h3>Edit Smarter, Not Slower</h3>
 <div class="product-wrapper">
   <div class="product-image">
     <img id="edit" src="images/editpro.png" alt="Quick Edit Pro">
   </div>
   <div class="product-content">
     <p>Quick Edit Pro replaces the clunky WordPress inline editor with a clean, AJAX-powered editing experience. Instantly update titles, descriptions, pricing, stock, and more—without ever reloading the page.</p>
     <p>Pair it with Quick Price Pro to bulk edit pricing, tax status, and sale schedules across your entire catalog in seconds.</p>
     <div class="pricing-placeholder">$49.99 / year $99.99 / Lifetime</div>
     <div class="cta-buttons">
       <a href="downloads/Quick-Edit.zip" class="free">Download Free Version</a>
       <a href="#" class="pro">Purchase PRO Version</a>
     </div>
   </div>
 </div>


<section class="feature-table">
 <table>
   <thead>
     <tr>
       <th>Features</th>
       <th>Quick Edit FREE</th>
       <th>Quick Edit PRO</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>Inline Editing for Products</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Edit Product Title, Price, and Sale Schedule</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Update SKU, GTIN, EAN, ISBN</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Modify Categories, Tags & Visibility</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Control Stock Status & Quantity</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Edit External Product Links</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Last Edited Timestamp</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Update Product Images Inline</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Edit Alt Text and Gallery Images</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Product Grid Builder (Shortcode Output)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Media Carousel Builder (Shortcode Output)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Schedule Changes for Later</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Restore from Last Version (Version Control)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
   </tbody>
 </table>
</section>
</section>

<section>
 <h2>Quick SEO Pro</h2>
 <h3>Rank Products from Day One</h3>
 <div class="product-wrapper">
   <div class="product-image">
     <img id="seo" src="images/seopro.png" alt="Quick SEO Pro">
   </div>
   <div class="product-content">
     <p>Quick SEO Pro injects perfectly formatted schema, title/meta, and social tags directly into your product editor. No fluff. Just better rankings, faster indexing, and properly structured product data from day one.</p>
     <p>Unlock a full SEO suite: robots.txt editor, sitemap.xml generator, broken link scanner, redirect manager, and site-wide audits with score tracking. Your store deserves SEO that works.</p>
     <div class="pricing-placeholder">$79.99 / year $139.99 / Lifetime</div>
     <div class="cta-buttons">
       <a href="downloads/Quick-SEO.zip" class="free">Download Free Version</a>
       <a href="#" class="pro">Purchase PRO Version</a>
     </div>
   </div>
 </div>


<section class="feature-table">
 <table>
   <thead>
     <tr>
       <th>Features</th>
       <th>Quick SEO FREE</th>
       <th>Quick SEO PRO</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>Focus Keyword Field</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>SEO Title + Meta Description</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Social Media Title, Description & Image (OG)</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Schema Markup Injection</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Canonical URL Field</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>GTIN, UPC, EAN, or ISBN Input</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Injects SEO Fields into Product Page & Site Head</td>
       <td>✅</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>robots.txt Editor + Save Function</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Sitemap.xml Generator</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Google Analytics + Search Console Integration</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Google PageSpeed Insights Integration</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Canonical Link Scanner (PDF Report)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Broken Link Scanner (PDF Report)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Global SEO Find/Replace Tool</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Schedule SEO Changes</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Version Control (Mass SEO Changes)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Mass Redirect Form (QUICK-DIRECT)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Site-Wide SEO Audit (QUICK AUDIT)</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>SEO Score Generator + Improvement Tips</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
     <tr>
       <td>Save SEO Score into Product Meta Box</td>
       <td>❌</td>
       <td>✅</td>
     </tr>
   </tbody>
 </table>
</section>
</section>

 <section>
    <h2>Quick WOO Pro</h2>
    <h3>Bundle and save!!</h3>
    <div class="product-wrapper">
      <div class="product-image">
        <img id="logo" src="images/logo.png" alt="Quick SEO Pro">
      </div>
      <div class="product-content">
        <p>Quick SEO Pro injects perfectly formatted schema, title/meta, and social tags directly into your product editor. No fluff. Just better rankings, faster indexing, and properly structured product data from day one.</p>
        <p>Unlock a full SEO suite: robots.txt editor, sitemap.xml generator, broken link scanner, redirect manager, and site-wide audits with score tracking. Your store deserves SEO that works.</p>
        <div class="pricing-placeholder">$139.99 / year $219.99 / Lifetime</div>
        <div class="cta-buttons">
         
          <a href="#" class="pro">Purchase PRO Version</a>
        </div>
      </div>
    </div>
   
   
   <section class="feature-table">
    <table>
      <thead>
        <tr>
          <th>Included Plugins</th>
          <th>Individual Price (Yearly)</th>
          <th>Individual Price (Lifetime)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quick Add Pro + Variation</td>
          <td>$49.00 / year</td>
          <td>$99.00 lifetime</td>
        </tr>
        <tr>
          <td>Quick Edit Pro + Price</td>
          <td>$49.99 / year</td>
          <td>$99.00 lifetime</td>
        </tr>
        <tr>
          <td>Quick SEO Pro</td>
          <td>$79.99 / year</td>
          <td>$139.99 lifetime</td>
        </tr>
        <tr style="font-weight: bold; background-color: #1c0043; color: #ffffff;">
          <td>Total Cost if Purchased Separately</td>
          <td>$178.98 / year</td>
          <td>$337.99 lifetime</td>
        </tr>
      </tbody>
    </table>
   </section>
   </section>
</body>
</html>
 `;
 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('apps').innerHTML = appsHTML;
});
}
insertApps();
