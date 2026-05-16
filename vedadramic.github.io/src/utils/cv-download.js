const CV_PDF_FILE_NAME = 'Vedad_Ramic_CV.pdf'
const CV_PDF_URL = `${import.meta.env.BASE_URL}downloads/${CV_PDF_FILE_NAME}`

export function downloadCvPdf() {
  const link = document.createElement('a')
  link.href = CV_PDF_URL
  link.download = CV_PDF_FILE_NAME
  link.rel = 'noopener'
  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  link.remove()
}