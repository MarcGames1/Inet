import { NextSeo } from 'next-seo'
const nume_site = 'https://iwebagency.ro/'
const nume_firma = 'MARK ELITE TECHNOLOGIES L.L.C'


import Link from 'next/link'
import React from 'react'

const Cookie = () => {
  return (
    <>
          <NextSeo
              title="Politica Cookie • IwebAgency.ro"
              description="Politica Cookie"
              canonical="https://iwebagency.ro/politica-cookie/"
              robotsProps={'noindex, follow'}
          />

          <h2>Introduction</h2>
          <p>This page sets out the cookie policy (the “Cookie Policy”) of {nume_firma} (“We”, “Us”, and “Our”) and how cookies are used on this website https://www.dubai-online.com/ (the “Website”) when you (“You” or “Your”) use it.</p><span id="ezoic-pub-ad-placeholder-126" class="ezoic-adpicker-ad"></span>
          <p>This Cookie Policy forms part of our <Link href={`${nume_site}/termeni-conditii`}><a title="Website Terms and Conditions" href={`${nume_site}/termeni-conditii`}>Terms and Conditions</a></Link> (the “Terms”). By accessing the Website, for whatever purpose, You agree to accept this Cookie Policy and Our Terms.</p>
          <p>This Website, like most others, uses cookies. Cookies are small text files stored on your computer or mobile device by a browser when a website is accessed.<span id="ezoic-pub-ad-placeholder-199" class="ezoic-adpicker-ad"></span></p>
          <span id="ezoic-pub-ad-placeholder-127" class="ezoic-adpicker-ad"></span><p>Cookies help Us:</p>
          <ul>
              <li>Give You a better online experience.</li>
              <li>Improve the speed of the Website and protect Your security.</li>
              <li>Display advertisements effectively and keep the Website free to use.</li>
          </ul>
          <p>We do not use cookies to:</p>
          <ul>
              <li>Collect Your personal details or any sensitive information about You.</li>
              <li>Pass any personally identifiable data about You to third parties.</li>
          </ul>
          <h2>Cookies In Use</h2>
          <p><strong>Our Cookies</strong></p>
          <p>We use cookies to make the Website work including those that:</p>
          <ul>
              <li>Allow You to add comments and reviews to the Website.</li>
              <li>Give You, if you are a registered user, access to restricted areas of the Website.</li>
          </ul>
          <p><strong>Third Party Functional Cookies</strong></p>
          <p>Our Website, like most other websites, makes use of services and functions supplied by third parties. Some of these services and functions use cookies. Our Website uses YouTube and Google Maps.</p>
          <p>YouTube is a video content service provided by Google Inc (“Google”) that allows Our Website to display video content on its pages. You can view the privacy policy of Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <p>Google Maps is a map visualisation service provided by Google that allows Our Website to display maps on its pages. You can view the privacy policy of Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <p><strong>Visitor Statistics Cookies</strong></p>
          <p>Like many other website, this Website uses analytics software to help Us monitor statistics including, but not limited to, how many people have visited Our Website, how long people spend on the Website, what content they look at, how many times they visit the Website etc.</p>
          <p>Our Website uses Google Analytics.</p>
          <p>Google Analytics is a service provided by Google. You can view the privacy policy of Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <p>Google offers a browser add-on tool that gives You the ability to prevent Your data being used by Google Analytics. You can find the tool <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <p><strong>Advertising Cookies</strong></p>
          <p>Cookies are used extensively in online advertising. We permit third party advertisers to show adverts on the Website. This provides Us with revenue and allows You to browse Our content for free. These cookies do not store any personally identifiable information about You, but may store information about Your visit to this Website and other websites You have visited. This enables the advertisers to show adverts to You they believe are relevant to You and Your interests.</p>
          <p>We use Google AdSense, an advertising service provided by Google. The service makes use of the DoubleClick advertising platform and cookies, which track the use of this Website and Your behaviour.<span id="ezoic-pub-ad-placeholder-192" class="ezoic-adpicker-ad"></span></p>
          <p>You can manage the DoubleClick settings <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <p>You can view the privacy policy of Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</p>
         
          <h3>Managing Cookies and Advertising</h3>
          <p>You can also manage cookies by adjusting the settings on Your browser. Most web browsers will allow You to see which cookies have been set, block them, delete them etc. Please bear in mind that if You choose to disable cookies, certain sections of the Website may not function correctly.</p>
          <p>Instructions for popular browsers are listed below:</p>
          <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
          <p>Disabling cookies won’t prevent advertisements from being served. It will only mean that advertisements are not tailored to those the advertisers believe may be of interest to You.</p>
          <p>You can also manage advertisement personalisation by visiting <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a> and/or the <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI opt-out page</a>.</p>
          <h3>Variation</h3>
          <p>We may revise the Cookie Policy at any time by amending this page. The Cookie Policy will apply to the use of the Website from the date of the publication of the revised Cookie Policy on the Website. You are expected to check this page before using the Website to take notice of any changes made.</p>
    </>
  )
}

export default Cookie