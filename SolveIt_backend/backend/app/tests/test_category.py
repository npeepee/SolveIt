from app.models.category import CategoryModel
from app.schemas.category import CategorySchema


def test_category_model():
    category_model = CategoryModel(name="Web", description="Web-based challenges")
    assert category_model.name == "Web"
    assert category_model.description == "Web-based challenges"


def test_category_schema():
    category_model = CategoryModel(name="Web", description="Web-based challenges")
    category_schema = CategorySchema(name=category_model.name, description=category_model.description)
    assert category_schema.name == "Web"
    assert category_schema.description == "Web-based challenges"
