document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-detail');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = window.PROJECTS ? window.PROJECTS[id] : null;

    if (!project) {
        container.innerHTML = `
            <div class="project-detail-empty">
                <h1>Project not found</h1>
                <p>This project link is broken or missing an id.</p>
                <a href="index.html#log" class="btn primary">Back to build log</a>
            </div>
        `;
        return;
    }

    document.title = project.title + ' — Rahul Kumar';

    const tagsHtml = (project.tags || [])
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    const highlightsHtml = (project.highlights && project.highlights.length)
        ? `<ul class="project-highlights">${project.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
        : '';

    const isVideo = src => /\.(mp4|webm|mov)$/i.test(src);

    const galleryItemsHtml = (project.images || [])
        .map(src => isVideo(src)
            ? `
            <div class="gallery-item">
                <video src="${src}" controls preload="metadata" playsinline></video>
            </div>
        `
            : `
            <div class="gallery-item">
                <img src="${src}" alt="${project.title}" loading="lazy">
            </div>
        `).join('');

    const galleryHtml = galleryItemsHtml
        ? `<div class="project-gallery">${galleryItemsHtml}</div>`
        : '';

    const linksHtml = (project.links && (project.links.github || project.links.demo))
        ? `
        <div class="project-links">
            ${project.links.github ? `<a href="${project.links.github}" class="btn secondary" target="_blank" rel="noopener">View code</a>` : ''}
            ${project.links.demo ? `<a href="${project.links.demo}" class="btn primary" target="_blank" rel="noopener">Live demo</a>` : ''}
        </div>
    `
        : '';

    container.innerHTML = `
        <a href="index.html#log" class="back-link">&larr; Back to build log</a>
        <h1 class="project-detail-title">${project.title}</h1>
        <span class="project-date">${project.date}</span>
        <div class="tags">${tagsHtml}</div>
        <p class="project-detail-role"><strong>My role:</strong> ${project.role}</p>
        <p class="project-detail-description">${project.description}</p>
        ${highlightsHtml}
        ${linksHtml}
        ${galleryHtml}
    `;
});
