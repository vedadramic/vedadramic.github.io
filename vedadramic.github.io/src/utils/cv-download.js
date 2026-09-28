const CV_PDF_FILE_NAME = 'Vedad_Ramic_CV.pdf'
const CV_PDF_URL = `${import.meta.env.BASE_URL}downloads/${CV_PDF_FILE_NAME}`

export function getCvPdfUrl() {
  return CV_PDF_URL
}
