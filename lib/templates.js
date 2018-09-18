export default {
  textEmail ({ fields, greeting }) {
    const fieldsText = Object.keys(fields)
      .map(key => `${key}: ${fields[key]}`)
      .join('\n')

    return `${greeting}\n\n${fieldsText}`
  },
  // copied from html source of shopify email
  htmlEmail: ({ fields, greeting, subject }) => `
    <!DOCTYPE html>
    <html lang="en" style="font-size: 15px; line-height: 20px; text-transform: initial; letter-spacing: initial;font-weight: 400; color: #212b36; font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto,Helvetica Neue, sans-serif; margin: 0; padding: 0;">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name=" viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="referrer" content="never">
        <title>${subject}</title>

        <!-- Styles specific to Outlook 2007, 2010 and 2013 -->
        <!--[if gte mso 9]><style>ul,ol { margin: 0 0 0 24px;}dd {text-indent: -3em;}</style><![endif]-->
        <style data-premailer="ignore">
          .apple-link a {
            color: inherit !important;
            text-decoration: none !important;
          }

          @media screen and (max-width: 470px) {
            .mail-body>tbody>tr>td {
              padding-top: 0 !important;
            }

            .mail-body__content>tbody>tr>td {
              border-radius: 0;
              border-top: 0 !important;
              border-right: 0 !important;
              border-left: 0 !important;
            }

            .mail-sections>tbody>tr>td {
              padding-right: 0 !important;
              padding-left: 0 !important;
            }

            .mail-section>tbody>tr>td:first-child {
              padding-left: 20px !important;
            }

            .mail-section>tbody>tr>td:last-child {
              padding-right: 20px !important;
            }

            .mail-help-center>tbody>tr>td:first-child {
              padding-left: 20px !important;
            }

            .mail-help-center>tbody>tr>td:last-child {
              padding-right: 20px !important;
            }
          }
        </style>
        <style>
          body {
            margin: 0 !important;
            padding: 0;
          }

          body {
            height: 100%;
            width: 100%;
          }

          img {
            border: 0;
            height: auto;
            line-height: 0;
            outline: none;
            text-decoration: none;
            vertical-align: top;
            -ms-interpolation-mode: bicubic;
          }

          .ReadMsgBody {
            width: 100%;
          }

          .ExternalClass {
            width: 100%;
          }

          .ExternalClass {
            line-height: 100%;
          }

          body {
            -webkit-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -ms-text-size-�just: 100%;
            text-size-adjust: 100%;
          }

          body {
            font-size: 15px;
            line-height: 20px;
            text-transform: initial;
            letter-spacing: initial;
            font-weight: 400;
            color: #212b36;
            font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
          }

          .mail-button:hover {
            background-color: #5563c1;
            border-color: #5563c1;
          }

          @media screen and (min-width: breakpoint(display-text)) {
            html {
              font-size: 14px;
            }

            body {
              font-size: 14px;
            }

            pre {
              font-size: 14px;
            }

            h1 {
              font-size: 14px;
            }

            h2 {
              font-size: 14px;
            }

            h3 {
              font-size: 14px;
            }

            h4 {
              font-size: 14px;
            }

            h5 {
              font-size: 14px;
            }

            h6 {
              font-size: 14px;
            }

            .mail-button {
              font-size: 14px;
            }
          }
        </style>
      </head>

      <body style="height: 100%; width: 100%; -webkit-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-ms-text-size-adjust: 100%; text-size-adjust:0%; font-size: 15px; line-height: 20px; text-transform: initial;letter-spacing: initial; font-weight: 400; color: #212b36; font-family: -apple-system, BlinkMacSystemFont, SanFrancisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; margin: 0; padding: 0;">
        <table class="mail-priority-indicator mail-priority-indicator--low" style="width: 100%; border-collapse:collapse; border-spacing: 0; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust:0%;text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0;" cellpadding="0" cellspacing="0">
          <tbody>
            <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0;border-top-style: solid; height: 0; border-top-color: #dfe3e8; padding: 0; border-width: 5px 0 0;"></td>
            </tr>
          </tbody>
        </table>
        <table class="mail-body" style="width: 100%; border-collapse: collapse;border-spacing: 0;-webkit-text-size-adjust: 100%; -moz-text-size-adjust:0%; -ms-text-size-adjust: 100%; text-size-adjust: 100%;mso-table-lspace:0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0;" cellpadding="0" cellspacing="0">
          <tbody>
            <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0;padding: 20px 0; border:0;"></td>
              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; width:470px; padding: 20px 0; border: 0;">
                <table class="mail-body__content" align="center" style="width: 100%; border-collapse: initial;border-spacing: 0; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust:100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom:0; padding: 0;" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
                      <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust:100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0;margin-bottom: 0; border-top-left-radius: 3px; bor�r-top-right-radius: 3px;border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; padding: 0; border: 1px solid#dfe3e8;">
                        <table class="mail-sections" style="width: 100%; border-collapse: collapse; border-spacing:0; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom:0; padding: 0;" cellpadding="0" �llspacing="0">
                          <tbody>
                            <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
                              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;-ms-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace:0; margin-top: 0; margin-bottom: 0; padding: 16px;border: 0;">
                                <table class="mail-section mail-section--type-primary" style="width: 100%;border-collapse: collapse; border-spacing: 0; -webkit-text-size-adjust:0%;-moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-size-adjust: 100%;mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0;" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
                                      <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;-ms-text-size-adjust: 1%; text-size-adjust: 100%; mso-table-lspace: 0;mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0 8px 16px; border:0;">
                                        <table style="width: 100%; border-collapse: collapse; border-spacing: 0;-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;-ms-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0;mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0;" cellpadding="0" cellspacing="0">
                                          <tbody>
                                            <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
                                              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;-ms-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0;mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0; border:0;">
                                                <h1 style="margin-top: 0; margin-bottom: 0; font-size: 15px;font-weight: 400; line-height: 20px; text-transform: initial;letter-spacing: initial; padding:0;">${greeting}</h1>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="mail-section" style="width: 100%; border-collapse: collapse;border-spacing: 0; -webkit-text-size-adjust: 100%; -moz-text-size-adjust:100%; -ms-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace:0; mso-table-rspace: 0; margin-top: 0; margin-bottom: 0; padding: 0;" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr style="margin-top: 0; margin-bottom: 0; padding: 0;">
                                      <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;-ms-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0;mso-table-rspace: 0; margin-top: 0; margin-bottom:0; border-top-color:#dfe3e8; border-top-style: solid; padding: 16px 8px 0; border-width: 1px 00;">
                                        ${Object.keys(fields).map((key, i) => `
                                          <div${i > 0 && ' style="margin-top: 16px;"'}>
                                            <h3 style="margin-top: 0; margin-bottom: 0; font-size: 15px; font-weight:400; line-height: 20px; text-transform: initial; letter-spacing: initial;padding: 0;"><b>${key}:</b></h3>
                                            <pre style="font-size: 15px; line-height: 20px; text-transform: initial;letter-spacing: initial; font-weight: 400; color: #212b36; font-family:-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, HelveticaNeue, sans-serif; margin-top: 0; margin-bottom: 0; white-space: pre-line;padding: 0;">${fields[key]}</pre>
                                          </div>
                                        `).join('\n')}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust:100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; margin-top: 0;margin-bottom: 0; padding: 20px 0; border:0;"></td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `
}
