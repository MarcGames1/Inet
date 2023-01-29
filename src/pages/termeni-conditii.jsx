import { NextSeo } from 'next-seo'
import React from 'react'
import { useRouter } from 'next/router'
import { tw } from 'twind'


const nume_site = 'https://marweb.ro'
const nume_firma ='MARK ELITE TECHNOLOGIES L.L.C'


const Legal = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Termeni Si Conditii • MarWeb.ro"
        description="termeni si conditii"
        canonical={`${process.env.DOMAIN}${router.pathname}`}
        robotsProps={'noindex, follow'}
      />

      <div>
        <h1>GENERAL CONDITIONS FOR WEBSITE USAGE - {nume_site} </h1>

        <h2>Introduction</h2>
        <p>
          These are the terms and conditions (the “Terms”) on which this website {nume_site} (the “Website”) is made
          available to you (“You” or “Your”) by {nume_firma} (“We”, “Us”, and “Our”). Please read these Terms carefully
          before You start to use this Website. By accessing the Website, for whatever purpose, You agree to fully
          accept these Terms. If You do not agree with these Terms, do not use the Website. We may change these Terms at
          any time, so please check them on a regular basis.
        </p>
        <span id="ezoic-pub-ad-placeholder-126" class="ezoic-adpicker-ad"></span>
        <h2>Privacy Policy and Cookie Policy</h2>
        <p>
          Please see our Privacy Policy and Cookie Policy for details of how information and data are collected and used
          by {nume_firma}. Our{' '}
          <a title="Privacy Policy" href="https://www.dubai-online.com/privacy-policy/">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a title="Website Cookie Policy" href="https://www.dubai-online.com/cookie-policy/">
            Cookie Policy
          </a>{' '}
          are incorporated into, and form part of these Terms.
        </p>
        <h2>Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, {nume_firma} or its licensors own the intellectual property rights in the Website and
          the material published on it, including, but not limited to, text, logos, graphics, and photographs. These
          materials are protected by copyright and intellectual property laws around the world. Subject to the license
          below, all such intellectual property rights are reserved.
          <span id="ezoic-pub-ad-placeholder-199" class="ezoic-adpicker-ad"></span>
        </p>
        <p>
          Your use of the Website does not grant You any rights to {nume_firma}’s intellectual property of that or third
          parties in the Website and its content.
        </p>
        <p>
          Other than as expressly permitted in these Terms, You may not copy, republish, reproduce, post, download,
          broadcast, transmit, record, edit, the web pages, text, logos, graphics, trademarks, computer codes in the
          Website and its content.
        </p>
        <p>
          You may view, and download for page caching purposes only, pages from the website for Your own personal
          reference.
        </p>
        <p>
          You must not use any text, images, or material on the Website for any purpose without obtaining a licence or
          written permission to do so from {nume_firma} or its licensors.
        </p>
        <h2>Acceptable Use</h2>
        <p>
          You may only use the Website for lawful purposes. You must not use the Website in any way that causes, or
          could cause, damage to the Website or detriment to the availability or accessibility of the Website. You must
          not use the Website in any way that is illegal or fraudulent, or has any illegal or fraudulent purpose or
          effect.<span id="ezoic-pub-ad-placeholder-190" class="ezoic-adpicker-ad"></span>
        </p>
        <p>
          You must not use the Website to copy, store, host, transmit, send, use, publish or distribute any material
          which consists of (or contains links to) any spyware, computer virus, Trojan horse, worm, keystroke logger,
          adware, or any other malicious computer code.
        </p>
        <p>You must not undertake any action that imposes an unreasonable or large load on Our infrastructure.</p>
        <p>You must not bypass any measure We may use to restrict or prevent access to the Website.</p>
        <h3>Restricted Access</h3>
        <p>It is not necessary to register with Us in order to use most parts of the Website.</p>
        <p>
          Access to certain sections of the Website is restricted to registered users. If {nume_firma} has given You an
          account with a username and password to access restricted areas of the Website, You must ensure that the
          username and password remain confidential. You agree to immediately notify Us of any unauthorised use of Your
          account or any breach of security of which You become aware.
        </p>
        <p>When registering You must provide Us with accurate, true, and complete information.</p>
        <p>You are entirely responsible for any and all activities that occur under Your account.</p>
        <p>
          {nume_firma} reserves the right to disable Your account, username and password at any time, without notice or
          explanation.
        </p>
        <h3>Site Uptime</h3>
        <p>
          We undertake all reasonable measure to ensure that the Website is available at all times. We accept no
          responsibility for any loss whatsoever, arising from the unavailability of the Website.
        </p>
        <h3>User Content</h3>
        <p>
          Under these terms and conditions, Your user content (“User Content”) means material (including, without
          limitation, comments and reviews, text, images and photographs, logos, and video and audio files) that You
          submit to the Website, for any purpose whatsoever.
        </p>
        <p>
          You grant {nume_firma} a non-exclusive, perpetual, worldwide, irrevocable, royalty-free license to use,
          reproduce, modify, publish, translate and distribute Your User Content in any media or technology now known or
          later deployed. You also grant {nume_firma} the right to sub-license these rights in perpetuity, and the right
          to bring an action for infringement of these rights.
          <span id="ezoic-pub-ad-placeholder-192" class="ezoic-adpicker-ad"></span>
        </p>
        <p>
          Your User Content must not violate the legal rights of third parties, in particular material that contains the
          intellectual property rights of third parties, unless You have obtained all licences and consents to
          distribute such material.
        </p>
        <p>
          You must not submit Your User Content to the Website that is or has ever been the subject of any actual,
          forthcoming or threatened legal action or dispute.
        </p>
        <p>
          {nume_firma} retains the right to refuse, delete, edit, move, update or otherwise amend Your User Content in
          any way, and without notice.
        </p>
        <p>
          On the public areas of the Website, including but not limited to comments and reviews sections, Your User
          Content, must not:<span id="ezoic-pub-ad-placeholder-193" class="ezoic-adpicker-ad"></span>
        </p>
        <ul>
          <li>Defame or libel any person.</li>
          <li>Breach the intellectual property rights of others.</li>
          <li>
            Include within the content any personal information about You or anybody else, such as email address,
            telephone number, or postal address.
          </li>
          <li>Include any commercial advertising.</li>
          <li>
            Include misleading, profane, unlawful, defamatory, obscene, illegal, racially offensive, threatening, or
            otherwise objectionable content.
          </li>
          <li>Promote any illegal activity.</li>
          <li>Misrepresent your identity or affiliation with any person, product, company, or organisation.</li>
          <li>Contain text in any language other than English or Romanian.</li>
          <li>Include any viruses or malicious computer code.</li>
        </ul>
        <p>
          {nume_firma} does not review, authorise, or endorse any User Content. We accept no responsibility for any User
          Content. You are solely responsible for Your User Content and will be solely liable in any legal action
          resulting from Your User Content.
        </p>
        <p>
          You also acknowledge that once You submit Your User Content to the Website, you cannot remove or edit it. If
          you wish to remove or amend Your User Content, We will consider any such request on a case-by-case basis. If
          you wish to remove or amend Your User Content, please contact us using this{' '}
          <a title="Contact Us" href={`${nume_site}/contact`}>
            form
          </a>
          .
        </p>
        <p>
          Where a claim is brought against {nume_firma} by a third party in relation to Your User Content, You agree to
          fully reimburse Us for all loses, costs, damages, expenses, claims, actions suffered or incurred by Us as a
          result of Your breach of these Terms and/or Your User Content.
          <span id="ezoic-pub-ad-placeholder-194" class="ezoic-adpicker-ad"></span>
        </p>
        <h3>No Warranties</h3>
        <p>
          Whilst {nume_firma} takes reasonable steps to ensure that the information on the Website is correct and up to
          date, We do not guarantee that all material is correct and up to date.
        </p>
        <p>
          You should not plan to do, or refrain from doing, something based on the content on the Website without first
          checking the accuracy of that content by other means. For example, if You plan to dine at a restaurant and
          base your itinerary on opening times listed on this site, You could verify those opening times by visiting the
          official website of that restaurant or contacting the restaurant directly.
        </p>
        <p>
          All material contained on the Website is provided without any warranty of any kind. You use the material on
          the Website at Your own discretion.
        </p>
        <h3>Links to Other Websites and Third Party Content</h3>
        <p>
          Throughout the Website You will find links to third party websites, resources provided by third parties, and
          advertisements. {nume_firma} is not responsible for the content of third party websites, third party
          resources, or advertisements. We do not review third party websites, third party resources, advertisements,
          and do not endorse them. {nume_firma} accepts no responsibility for third party websites, third party
          resources, or advertisements, or for any loss or damage that may arise from Your use of them.
          <span id="ezoic-pub-ad-placeholder-195" class="ezoic-adpicker-ad"></span>
        </p>
        <h3>Exclusion of Liability</h3>
        <p>
          {nume_firma} does not make any representations or warranties of any kind, express or implied, in relation to
          all or any part of the Website and its content or any websites to which the Website is linked, and all
          warranties and representations are hereby excluded to the extent permitted by law.
        </p>
        <p>
          The content of the Website does not constitute advice and should not be relied upon in making, or not making,
          any decision.
        </p>
        <p>
          To the extent permitted by law, {nume_firma} disclaims all liability in connection with any loss and/or damage
          resulting from the use of the Website, its content, or any website to which the Website links.
        </p>
        <h3>Variation</h3>
        <p>
          {nume_firma} may revise the Terms at any time by amending this page. Terms will apply to the use of the
          Website from the date of the publication of the revised Terms on the Website. You are expected to check this
          page before using the Website to take notice of any changes made.
        </p>
        <h3>Severance</h3>
        <p>
          If any provision of these Terms is found by a court or a regulator to be invalid or unenforceable the other
          provisions of these Terms shall continue to apply.
          <span id="ezoic-pub-ad-placeholder-196" class="ezoic-adpicker-ad"></span>
        </p>
        <h4>Law and Jurisdiction</h4>
        <p>
          These Terms will be governed by and construed in accordance with English law. Any disputes arising in relation
          to these Terms will be subject to the exclusive jurisdiction of the Courts of England and Wales.
        </p>

        <h4>Our Details</h4>
        <p>Our business name is {nume_firma}.</p>
        <span class="ezoic-autoinsert-ad ezoic-long_content"></span>
      </div>
    </>
  );
}

export default Legal