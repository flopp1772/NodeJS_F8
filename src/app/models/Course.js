const mongoose = require('mongoose');
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, unique: true },
}, {
    timestamps: true,
});

// Middleware: Tự động tạo slug trước khi save
CourseSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true, // Loại bỏ ký tự đặc biệt
        });
    }
    next();
});

// Plugin: Thêm chức năng soft delete
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,           // Thêm trường deletedAt vào document
    overrideMethods: 'all',    // Ghi đè các method mặc định như find(), count() để bỏ deleted items
});

module.exports = mongoose.model('Course', CourseSchema);