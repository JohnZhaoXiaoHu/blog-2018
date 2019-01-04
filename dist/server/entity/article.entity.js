"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Article = class Article extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({
        type: 'int',
        width: 11,
        nullable: false
    }),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 64,
        nullable: false
    }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        type: 'char',
        length: 64,
        nullable: false
    }),
    __metadata("design:type", String)
], Article.prototype, "author", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Article.prototype, "date", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Article.prototype, "summary", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Article.prototype, "text", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Article.prototype, "html", void 0);
Article = __decorate([
    typeorm_1.Entity()
], Article);
exports.Article = Article;