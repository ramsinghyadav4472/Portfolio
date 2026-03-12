# 📁 Portfolio Assets Folder

Drop your files here before running the project.  
All files in `public/assets/` are automatically served at `/assets/...` in the browser.

---

## 📂 Folder Structure

### `/resume/`
| File to add | Used in |
|---|---|
| `Ram_Singh_Yadav_Resume.pdf` | Resume download button in hero, recruiter panel, and footer |

**URL once added:** `/assets/resume/Ram_Singh_Yadav_Resume.pdf`

---

### `/images/`
| File to add | Used in |
|---|---|
| `profile.jpg` or `profile.png` | Profile photo in Hero / About section |
| `og-image.png` (1200×630px) | Social media preview card (Open Graph) |
| `favicon.ico` | Browser tab icon |
| `internship-letter.jpg` | Internship section if you add a scan |

**URL once added:** `/assets/images/profile.jpg`

---

### `/certs/`
| File to add | Used in |
|---|---|
| `oci-multicloud-architect.pdf` | OCI Multicloud Architect Pro cert |
| `oci-architect-associate.pdf` | OCI Architect Associate cert |
| `oci-foundations.pdf` | OCI Foundations cert |
| `infosys-genai.pdf` | Infosys Generative AI cert |
| `shine-ngo-internship.pdf` | Shine India NGO internship letter |
| `nptel-cloud.pdf` | NPTEL Cloud Computing cert |

**URL once added:** `/assets/certs/oci-multicloud-architect.pdf`

---

### `/og/`
| File to add | Used in |
|---|---|
| `og-card.png` (1200×630px) | Twitter / LinkedIn / WhatsApp preview |

---

## ✅ How to update the Resume download button

Once you drop `Ram_Singh_Yadav_Resume.pdf` in `/resume/`, update the links in:

- `src/components/RecruiterPanel.tsx` → `href="/assets/resume/Ram_Singh_Yadav_Resume.pdf"`
- `src/components/ResumeEducation.tsx` → `href="/assets/resume/Ram_Singh_Yadav_Resume.pdf"`
- `src/components/Footer.tsx` → (if present)

---

> Files placed in `public/` are **never processed by Webpack** — they are served as-is.  
> Do NOT put private keys, `.env` files, or secrets here.
